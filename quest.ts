import "frida-il2cpp-bridge";

console.log("Frida TypeScript build test loaded.");

Il2Cpp.perform(() => {
    console.log("IL2CPP runtime is available.");
});
