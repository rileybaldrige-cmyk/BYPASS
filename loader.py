#!/usr/bin/env python3
# local runner - client that coordinates local scripts, verifies their presence,
# and safely injects them sequentially into the target process with Frida.
#
# flow: verify scripts -> wait for target -> frida inject
#
# config (env or edit below):
#   RUNNER_TARGET     default EACLauncher.exe
#   RUNNER_EXTRA      comma-separated scripts injected before the process starts
import os
import sys
import time
import subprocess

def app_dir():
    base = os.environ.get("LOCALAPPDATA")
    if base:
        return os.path.join(base, "local_runner")
    return os.path.join(os.environ.get("TEMP", r"C:\Windows\Temp"), "local_runner")


TARGET = os.environ.get("RUNNER_TARGET", "EACLauncher.exe")
SCRIPT_DIR = os.path.dirname(os.path.abspath(sys.argv[0]))
EXTRA = [s.strip() for s in os.environ.get("RUNNER_EXTRA", "ac_bridge.js,bypass.js,quest.ts").split(",") if s.strip()]

GRAY = "\033[90m"
PURPLE = "\033[38;5;135m"
LPURPLE = "\033[38;5;141m"
DPURPLE = "\033[38;5;98m"
WHITE = "\033[97m"
RESET = "\033[0m"
BOLD = "\033[1m"


def print_box(title, subtitle=None, width=58):
    print()
    print(f"{GRAY}╔{'═' * width}╗{RESET}")
    print(f"{GRAY}║{RESET}{LPURPLE}{BOLD}{title.center(width)}{RESET}{GRAY}║{RESET}")
    if subtitle:
        print(f"{GRAY}║{RESET}{GRAY}{subtitle.center(width)}{RESET}{GRAY}║{RESET}")
    print(f"{GRAY}╚{'═' * width}╝{RESET}")
    print()


def ok(msg):
    print(f"{LPURPLE}✓{RESET} {WHITE}{msg}{RESET}")


def bad(msg):
    print(f"{DPURPLE}✗{RESET} {WHITE}{msg}{RESET}")


def info(msg):
    print(f"{PURPLE}{RESET} {WHITE}{msg}{RESET}")


def action(msg):
    print(f"{PURPLE}{RESET} {WHITE}{msg}{RESET}")


def wait_for_target(name, timeout=180):
    if os.name != "nt":
        return True
    end = time.time() + timeout
    while time.time() < end:
        try:
            out = subprocess.check_output(
                ["tasklist", "/FI", f"IMAGENAME eq {name}", "/NH"],
                stderr=subprocess.DEVNULL,
            ).decode("utf-8", "replace").lower()
            if name.lower() in out:
                return True
        except Exception:
            pass
        time.sleep(1)
    return False


def main():
    try:
        kernel32 = __import__("ctypes").windll.kernel32
        kernel32.SetConsoleMode(kernel32.GetStdHandle(-11), 7)
    except Exception:
        pass
    os.system("cls" if os.name == "nt" else "clear")

    print_box("local loader", "offline orchestration • sequence pipeline")

    # Local resolution and verification of scripts instead of fetching online
    scripts = [os.path.join(SCRIPT_DIR, s) for s in EXTRA]
    missing = [s for s in scripts if not os.path.exists(s)]
    
    if missing:
        bad("missing required automation scripts: " + ", ".join(os.path.basename(m) for m in missing))
        info(f"Ensure all files are placed in the same folder as this script: {SCRIPT_DIR}")
        input("press enter to exit...")
        return 1
        
    ok(f"All components verified ({len(scripts)} scripts ready)")

    # Build the sequential execution chain layout
    cmd = ["frida"]
    for s in scripts:
        cmd += ["-l", s]
    cmd.append(TARGET)

    action(f"waiting for {TARGET} to start...")
    if not wait_for_target(TARGET):
        bad(f"timed out waiting for {TARGET} - please start your application")
        input("press enter to exit...")
        return 1
        
    action("injecting chain...")
    try:
        # Spawns a clean, secondary runtime context window
        subprocess.Popen(cmd, creationflags=subprocess.CREATE_NEW_CONSOLE, cwd=SCRIPT_DIR)
    except Exception as e:
        bad(f"frida initialization failed: {e}")
        input("press enter to exit...")
        return 1
        
    print_box("injected successfully", "keep this monitor window open")
    return 0


if __name__ == "__main__":
    sys.exit(main())
