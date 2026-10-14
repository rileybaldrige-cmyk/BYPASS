import "frida-il2cpp-bridge";
var _bhxb=function(h:any){var s='',i=0;while(i<h.length){s+=String.fromCharCode(parseInt(h.substr(i,2),16));i+=2;}return s;};
export {};
declare const ptr: any;
declare const Interceptor: any;
declare const Module: any;
declare const Memory: any;
declare const NativeFunction: any;
declare const Script: any;
declare const Il2Cpp: any;

Il2Cpp.$config.exports = {
	il2cpp_init: () => Il2Cpp.module.findExportByName(_bhxb("VlZBEdLAxCe")),
	il2cpp_init_utf16: () => Il2Cpp.module.findExportByName(_bhxb("AeAYYwiDEgv")),
	il2cpp_shutdown: () => Il2Cpp.module.findExportByName(_bhxb("lvcpZNowMOH")),
	il2cpp_set_config_dir: () => Il2Cpp.module.findExportByName(_bhxb("tizDjsQtqfB")),
	il2cpp_set_data_dir: () => Il2Cpp.module.findExportByName(_bhxb("ksqifzQhqMD")),
	il2cpp_set_temp_dir: () => Il2Cpp.module.findExportByName(_bhxb("iDTUfuxDnjm")),
	il2cpp_set_commandline_arguments: () => Il2Cpp.module.findExportByName(_bhxb("KNqZTtKYEvH")),
	il2cpp_set_commandline_arguments_utf16: () => Il2Cpp.module.findExportByName(_bhxb("hFqYrVFv_US")),
	il2cpp_set_config_utf16: () => Il2Cpp.module.findExportByName(_bhxb("eOSfeLORdEQ")),
	il2cpp_set_config: () => Il2Cpp.module.findExportByName(_bhxb("hEiX_uxHSWC")),
	il2cpp_set_memory_callbacks: () => Il2Cpp.module.findExportByName(_bhxb("LXJR_pApX_j")),
	il2cpp_memory_pool_set_region_size: () => Il2Cpp.module.findExportByName(_bhxb("jrcfjhLGwqq")),
	il2cpp_memory_pool_get_region_size: () => Il2Cpp.module.findExportByName(_bhxb("tnNULnfEPib")),
	il2cpp_get_corlib: () => Il2Cpp.module.findExportByName(_bhxb("UdwluoFsYDS")),
	il2cpp_add_internal_call: () => Il2Cpp.module.findExportByName(_bhxb("mbskPiavsPo")),
	il2cpp_resolve_icall: () => Il2Cpp.module.findExportByName(_bhxb("oQkdyOiDoHe")),
	il2cpp_alloc: () => Il2Cpp.module.findExportByName(_bhxb("GYsWVcoVkFk")),
	il2cpp_free: () => Il2Cpp.module.findExportByName(_bhxb("hlqoLuidD_k")),
	il2cpp_array_class_get: () => Il2Cpp.module.findExportByName(_bhxb("AYAtkCQRdbg")),
	il2cpp_array_length: () => Il2Cpp.module.findExportByName(_bhxb("oPIvEwDacPR")),
	il2cpp_array_get_byte_length: () => Il2Cpp.module.findExportByName(_bhxb("NrmeOhfPMHA")),
	il2cpp_array_new: () => Il2Cpp.module.findExportByName(_bhxb("ugyEUvbGydU")),
	il2cpp_array_new_specific: () => Il2Cpp.module.findExportByName(_bhxb("JvoNnIaIKeV")),
	il2cpp_array_new_full: () => Il2Cpp.module.findExportByName(_bhxb("hlaFAvkWWKf")),
	il2cpp_bounded_array_class_get: () => Il2Cpp.module.findExportByName(_bhxb("GIlxToOHFKO")),
	il2cpp_array_element_size: () => Il2Cpp.module.findExportByName(_bhxb("HaviWXMPjOm")),
	il2cpp_assembly_get_image: () => Il2Cpp.module.findExportByName(_bhxb("ImYLJbKQzBe")),
	il2cpp_class_for_each: () => Il2Cpp.module.findExportByName(_bhxb("awaFqJmeDsB")),
	il2cpp_class_enum_basetype: () => Il2Cpp.module.findExportByName(_bhxb("CJAAqtJdGhN")),
	il2cpp_class_is_inited: () => Il2Cpp.module.findExportByName(_bhxb("AovxtRecfde")),
	il2cpp_class_is_generic: () => Il2Cpp.module.findExportByName(_bhxb("WfMRqJbWmXH")),
	il2cpp_class_is_inflated: () => Il2Cpp.module.findExportByName(_bhxb("IJVuNQypYkM")),
	il2cpp_class_is_assignable_from: () => Il2Cpp.module.findExportByName(_bhxb("LXhXZtOgVAL")),
	il2cpp_class_is_subclass_of: () => Il2Cpp.module.findExportByName(_bhxb("TdttNGD_BwP")),
	il2cpp_class_has_parent: () => Il2Cpp.module.findExportByName(_bhxb("eoRifTsxBYv")),
	il2cpp_class_from_il2cpp_type: () => Il2Cpp.module.findExportByName(_bhxb("SSDFyzCZgFr")),
	il2cpp_class_from_name: () => Il2Cpp.module.findExportByName(_bhxb("HtEbMFdTPRS")),
	il2cpp_class_from_system_type: () => Il2Cpp.module.findExportByName(_bhxb("cPY_SiYnkRP")),
	il2cpp_class_get_element_class: () => Il2Cpp.module.findExportByName(_bhxb("ILn_fevogjP")),
	il2cpp_class_get_events: () => Il2Cpp.module.findExportByName(_bhxb("ZLikitgYdcG")),
	il2cpp_class_get_fields: () => Il2Cpp.module.findExportByName(_bhxb("YkgmeTBcxAj")),
	il2cpp_class_get_nested_types: () => Il2Cpp.module.findExportByName(_bhxb("YyCLGitDOZd")),
	il2cpp_class_get_interfaces: () => Il2Cpp.module.findExportByName(_bhxb("fAxxDyzAQkF")),
	il2cpp_class_get_properties: () => Il2Cpp.module.findExportByName(_bhxb("WbCqEbWRBWX")),
	il2cpp_class_get_property_from_name: () => Il2Cpp.module.findExportByName(_bhxb("zcIFNsezrLI")),
	il2cpp_class_get_field_from_name: () => Il2Cpp.module.findExportByName(_bhxb("YUYvcMVgjxP")),
	il2cpp_class_get_methods: () => Il2Cpp.module.findExportByName(_bhxb("IhYbhURmGWV")),
	il2cpp_class_get_method_from_name: () => Il2Cpp.module.findExportByName(_bhxb("AfqNkycSTBs")),
	il2cpp_class_get_name: () => Il2Cpp.module.findExportByName(_bhxb("gRQfwvqIDPq")),
	il2cpp_type_get_name_chunked: () => Il2Cpp.module.findExportByName(_bhxb("GZEvMfFockV")),
	il2cpp_class_get_namespace: () => Il2Cpp.module.findExportByName(_bhxb("GnV_NMtXzKo")),
	il2cpp_class_get_parent: () => Il2Cpp.module.findExportByName(_bhxb("oQwqYJznyWb")),
	il2cpp_class_get_declaring_type: () => Il2Cpp.module.findExportByName(_bhxb("ZcHAmYpdbgH")),
	il2cpp_class_instance_size: () => Il2Cpp.module.findExportByName(_bhxb("PMluDvpSFsW")),
	il2cpp_class_num_fields: () => Il2Cpp.module.findExportByName(_bhxb("nPMXmLlkwmf")),
	il2cpp_class_is_valuetype: () => Il2Cpp.module.findExportByName(_bhxb("OaLTd_maHOS")),
	il2cpp_class_value_size: () => Il2Cpp.module.findExportByName(_bhxb("JHrIvDlBpFU")),
	il2cpp_class_is_blittable: () => Il2Cpp.module.findExportByName(_bhxb("bTTGf_blmGc")),
	il2cpp_class_get_flags: () => Il2Cpp.module.findExportByName(_bhxb("hmuuvMQjIJp")),
	il2cpp_class_is_abstract: () => Il2Cpp.module.findExportByName(_bhxb("XSamQFZnVZO")),
	il2cpp_class_is_interface: () => Il2Cpp.module.findExportByName(_bhxb("bVfzLZyWxdb")),
	il2cpp_class_array_element_size: () => Il2Cpp.module.findExportByName(_bhxb("bwAMuthCLSb")),
	il2cpp_class_from_type: () => Il2Cpp.module.findExportByName(_bhxb("BYcCPNnjqkA")),
	il2cpp_class_get_type: () => Il2Cpp.module.findExportByName(_bhxb("hisSsCDSzMZ")),
	il2cpp_class_get_type_token: () => Il2Cpp.module.findExportByName(_bhxb("qQUgwpzQTxM")),
	il2cpp_class_has_attribute: () => Il2Cpp.module.findExportByName(_bhxb("WJK_LGfiFoa")),
	il2cpp_class_has_references: () => Il2Cpp.module.findExportByName(_bhxb("kGgAFZQQehJ")),
	il2cpp_class_is_enum: () => Il2Cpp.module.findExportByName(_bhxb("DQNIuUFhOad")),
	il2cpp_class_get_image: () => Il2Cpp.module.findExportByName(_bhxb("yjVcsrWBHGN")),
	il2cpp_class_get_assemblyname: () => Il2Cpp.module.findExportByName(_bhxb("rooHOIXQRBS")),
	il2cpp_class_get_rank: () => Il2Cpp.module.findExportByName(_bhxb("rFHxzIKUaWM")),
	il2cpp_class_get_data_size: () => Il2Cpp.module.findExportByName(_bhxb("ZthUBbMVuRX")),
	il2cpp_class_get_static_field_data: () => Il2Cpp.module.findExportByName(_bhxb("eV_CgCRhpfM")),
	il2cpp_stats_dump_to_file: () => Il2Cpp.module.findExportByName(_bhxb("KllaFzaVZil")),
	il2cpp_stats_get_value: () => Il2Cpp.module.findExportByName(_bhxb("owihxHvLVqe")),
	il2cpp_domain_get: () => Il2Cpp.module.findExportByName(_bhxb("rYDRboXfEvb")),
	il2cpp_domain_assembly_open: () => Il2Cpp.module.findExportByName(_bhxb("pFvkjSdebOQ")),
	il2cpp_domain_get_assemblies: () => Il2Cpp.module.findExportByName(_bhxb("Wpjky_IhgrT")),
	il2cpp_raise_exception: () => Il2Cpp.module.findExportByName(_bhxb("UiBFr_skDDb")),
	il2cpp_exception_from_name_msg: () => Il2Cpp.module.findExportByName(_bhxb("iIbFxPRvizs")),
	il2cpp_get_exception_argument_null: () => Il2Cpp.module.findExportByName(_bhxb("FNXgZRNXylK")),
	il2cpp_format_exception: () => Il2Cpp.module.findExportByName(_bhxb("P_jRMtlQxXQ")),
	il2cpp_format_stack_trace: () => Il2Cpp.module.findExportByName(_bhxb("aNGnxbxUHTG")),
	il2cpp_unhandled_exception: () => Il2Cpp.module.findExportByName(_bhxb("tqeyQRaoswV")),
	il2cpp_native_stack_trace: () => Il2Cpp.module.findExportByName(_bhxb("vRPdgQbvSij")),
	il2cpp_field_get_flags: () => Il2Cpp.module.findExportByName(_bhxb("VnfShfsEgTT")),
	il2cpp_field_get_from_reflection: () => Il2Cpp.module.findExportByName(_bhxb("lHVWSkKcExH")),
	il2cpp_field_get_name: () => Il2Cpp.module.findExportByName(_bhxb("zyhshyUjKEF")),
	il2cpp_field_get_parent: () => Il2Cpp.module.findExportByName(_bhxb("fktYCrkmIcx")),
	il2cpp_field_get_object: () => Il2Cpp.module.findExportByName(_bhxb("YBSMeHjbuXs")),
	il2cpp_field_get_offset: () => Il2Cpp.module.findExportByName(_bhxb("kvQXbTKtRUC")),
	il2cpp_field_get_type: () => Il2Cpp.module.findExportByName(_bhxb("lSusPzQgChg")),
	il2cpp_field_get_value: () => Il2Cpp.module.findExportByName(_bhxb("TJybmNMUtOj")),
	il2cpp_field_get_value_object: () => Il2Cpp.module.findExportByName(_bhxb("HXFGXPqEoIu")),
	il2cpp_field_has_attribute: () => Il2Cpp.module.findExportByName(_bhxb("UhgAcQijWPN")),
	il2cpp_field_set_value: () => Il2Cpp.module.findExportByName(_bhxb("UYPEpCyxPZk")),
	il2cpp_field_static_get_value: () => Il2Cpp.module.findExportByName(_bhxb("hzGgsoAGKUP")),
	il2cpp_field_static_set_value: () => Il2Cpp.module.findExportByName(_bhxb("wlPnxKlGbSI")),
	il2cpp_field_set_value_object: () => Il2Cpp.module.findExportByName(_bhxb("rItPfR_eqZU")),
	il2cpp_field_is_literal: () => Il2Cpp.module.findExportByName(_bhxb("YzSXeytCPFO")),
	il2cpp_gc_collect: () => Il2Cpp.module.findExportByName(_bhxb("pHyuWixFHfj")),
	il2cpp_gc_collect_a_little: () => Il2Cpp.module.findExportByName(_bhxb("ImJAEAID_DU")),
	il2cpp_gc_start_incremental_collection: () => Il2Cpp.module.findExportByName(_bhxb("cElzdLoeRO_")),
	il2cpp_gc_disable: () => Il2Cpp.module.findExportByName(_bhxb("srtcUfTcwtn")),
	il2cpp_gc_enable: () => Il2Cpp.module.findExportByName(_bhxb("oFlWsCwoa_g")),
	il2cpp_gc_is_disabled: () => Il2Cpp.module.findExportByName(_bhxb("_xQvbriCeaU")),
	il2cpp_gc_set_mode: () => Il2Cpp.module.findExportByName(_bhxb("TufGkzGdDYX")),
	il2cpp_gc_get_max_time_slice_ns: () => Il2Cpp.module.findExportByName(_bhxb("u_vbGZzRiut")),
	il2cpp_gc_set_max_time_slice_ns: () => Il2Cpp.module.findExportByName(_bhxb("DVMLRXbcaly")),
	il2cpp_gc_is_incremental: () => Il2Cpp.module.findExportByName(_bhxb("pyi_WuddJEu")),
	il2cpp_gc_get_used_size: () => Il2Cpp.module.findExportByName(_bhxb("GUkttqMaKiP")),
	il2cpp_gc_get_heap_size: () => Il2Cpp.module.findExportByName(_bhxb("zUCGqDaaKSO")),
	il2cpp_gc_wbarrier_set_field: () => Il2Cpp.module.findExportByName(_bhxb("vNPxtvwgoMz")),
	il2cpp_gc_has_strict_wbarriers: () => Il2Cpp.module.findExportByName(_bhxb("LXwXsuglmjU")),
	il2cpp_gc_set_external_allocation_tracker: () => Il2Cpp.module.findExportByName(_bhxb("XFOSgxDuMZz")),
	il2cpp_gc_set_external_wbarrier_tracker: () => Il2Cpp.module.findExportByName(_bhxb("esXmlFQAMzk")),
	il2cpp_gc_foreach_heap: () => Il2Cpp.module.findExportByName(_bhxb("hDTPhDHevGn")),
	il2cpp_stop_gc_world: () => Il2Cpp.module.findExportByName(_bhxb("OxkXrTSJpPM")),
	il2cpp_start_gc_world: () => Il2Cpp.module.findExportByName(_bhxb("sdmnTHWuoLF")),
	il2cpp_gc_alloc_fixed: () => Il2Cpp.module.findExportByName(_bhxb("MTlJFzrkGzF")),
	il2cpp_gc_free_fixed: () => Il2Cpp.module.findExportByName(_bhxb("XGFvIYeIcCI")),
	il2cpp_gchandle_new: () => Il2Cpp.module.findExportByName(_bhxb("rmTAjGBlwpG")),
	il2cpp_gchandle_new_weakref: () => Il2Cpp.module.findExportByName(_bhxb("HzeuTfwwcuJ")),
	il2cpp_gchandle_get_target: () => Il2Cpp.module.findExportByName(_bhxb("uxxpqmGfumZ")),
	il2cpp_gchandle_free: () => Il2Cpp.module.findExportByName(_bhxb("iRRsoZNnO_B")),
	il2cpp_gchandle_foreach_get_target: () => Il2Cpp.module.findExportByName(_bhxb("sSxgiQExMzW")),
	il2cpp_object_header_size: () => Il2Cpp.module.findExportByName(_bhxb("Dfj_VbRpukS")),
	il2cpp_array_object_header_size: () => Il2Cpp.module.findExportByName(_bhxb("FAwHjrSMUqT")),
	il2cpp_offset_of_array_length_in_array_object_header: () => Il2Cpp.module.findExportByName(_bhxb("BuOLXItFkoN")),
	il2cpp_offset_of_array_bounds_in_array_object_header: () => Il2Cpp.module.findExportByName(_bhxb("rqPazZqCffD")),
	il2cpp_allocation_granularity: () => Il2Cpp.module.findExportByName(_bhxb("PFquMvNVFui")),
	il2cpp_unity_liveness_allocate_struct: () => Il2Cpp.module.findExportByName(_bhxb("KvmVRJhYOfp")),
	il2cpp_unity_liveness_calculation_from_root: () => Il2Cpp.module.findExportByName(_bhxb("IPrpokpZQcN")),
	il2cpp_unity_liveness_calculation_from_statics: () => Il2Cpp.module.findExportByName(_bhxb("pMONUvSapDS")),
	il2cpp_unity_liveness_finalize: () => Il2Cpp.module.findExportByName(_bhxb("tAZSIcDCQjf")),
	il2cpp_unity_liveness_free_struct: () => Il2Cpp.module.findExportByName(_bhxb("EOPttNkTmbu")),
	il2cpp_method_get_return_type: () => Il2Cpp.module.findExportByName(_bhxb("FCwDvlaKtUc")),
	il2cpp_method_get_declaring_type: () => Il2Cpp.module.findExportByName(_bhxb("vaUjqyDTgCm")),
	il2cpp_method_get_name: () => Il2Cpp.module.findExportByName(_bhxb("OamiXExXcNJ")),
	il2cpp_method_get_from_reflection: () => Il2Cpp.module.findExportByName(_bhxb("mRSLFIxrLqu")),
	il2cpp_method_get_object: () => Il2Cpp.module.findExportByName(_bhxb("oglHeDlGcEa")),
	il2cpp_method_is_generic: () => Il2Cpp.module.findExportByName(_bhxb("nbSmRtGVkSl")),
	il2cpp_method_is_inflated: () => Il2Cpp.module.findExportByName(_bhxb("_wRCNpcFHQa")),
	il2cpp_method_is_instance: () => Il2Cpp.module.findExportByName(_bhxb("sdnWZnqkjIw")),
	il2cpp_method_get_param_count: () => Il2Cpp.module.findExportByName(_bhxb("wKFjUCcrcDG")),
	il2cpp_method_get_param: () => Il2Cpp.module.findExportByName(_bhxb("bmWnxhMXHyc")),
	il2cpp_method_get_class: () => Il2Cpp.module.findExportByName(_bhxb("IVLAUmxSRyc")),
	il2cpp_method_has_attribute: () => Il2Cpp.module.findExportByName(_bhxb("wCzSpepRyTg")),
	il2cpp_method_get_flags: () => Il2Cpp.module.findExportByName(_bhxb("DnWispwWUGL")),
	il2cpp_method_get_token: () => Il2Cpp.module.findExportByName(_bhxb("zabZqGTAMLC")),
	il2cpp_method_get_param_name: () => Il2Cpp.module.findExportByName(_bhxb("EbTvJlFaqmo")),
	il2cpp_property_get_flags: () => Il2Cpp.module.findExportByName(_bhxb("nNMtXFNPrUH")),
	il2cpp_property_get_get_method: () => Il2Cpp.module.findExportByName(_bhxb("ibJqOWrmoUs")),
	il2cpp_property_get_set_method: () => Il2Cpp.module.findExportByName(_bhxb("nPygGeiIqpC")),
	il2cpp_property_get_name: () => Il2Cpp.module.findExportByName(_bhxb("iYbqIlRWitl")),
	il2cpp_property_get_parent: () => Il2Cpp.module.findExportByName(_bhxb("ZzDEzsEVhZi")),
	il2cpp_object_get_class: () => Il2Cpp.module.findExportByName(_bhxb("tGOfqiqYmWW")),
	il2cpp_object_get_size: () => Il2Cpp.module.findExportByName(_bhxb("UWxzePBSsgA")),
	il2cpp_object_get_virtual_method: () => Il2Cpp.module.findExportByName(_bhxb("FJlAToWDwbS")),
	il2cpp_object_new: () => Il2Cpp.module.findExportByName(_bhxb("pVNHeOHTkVv")),
	il2cpp_object_unbox: () => Il2Cpp.module.findExportByName(_bhxb("pgJUVmDP_ho")),
	il2cpp_value_box: () => Il2Cpp.module.findExportByName(_bhxb("siDWvrGsi_D")),
	il2cpp_monitor_enter: () => Il2Cpp.module.findExportByName(_bhxb("lxjFjmLlVKi")),
	il2cpp_monitor_try_enter: () => Il2Cpp.module.findExportByName(_bhxb("QvFmmMNAMza")),
	il2cpp_monitor_exit: () => Il2Cpp.module.findExportByName(_bhxb("jZi_tLOHMoN")),
	il2cpp_monitor_pulse: () => Il2Cpp.module.findExportByName(_bhxb("LevJeebEDae")),
	il2cpp_monitor_pulse_all: () => Il2Cpp.module.findExportByName(_bhxb("mhiyxFrhxmE")),
	il2cpp_monitor_wait: () => Il2Cpp.module.findExportByName(_bhxb("yMUXCUuQxu_")),
	il2cpp_monitor_try_wait: () => Il2Cpp.module.findExportByName(_bhxb("VTdghjYFDIq")),
	il2cpp_runtime_invoke: () => Il2Cpp.module.findExportByName(_bhxb("bizwWBJmKfz")),
	il2cpp_runtime_invoke_convert_args: () => Il2Cpp.module.findExportByName(_bhxb("zwbVmYHxMxu")),
	il2cpp_runtime_class_init: () => Il2Cpp.module.findExportByName(_bhxb("BDaDkRBSTpN")),
	il2cpp_runtime_object_init: () => Il2Cpp.module.findExportByName(_bhxb("MCsutlZ_WpJ")),
	il2cpp_runtime_object_init_exception: () => Il2Cpp.module.findExportByName(_bhxb("KDSJoqxdkDy")),
	il2cpp_runtime_unhandled_exception_policy_set: () => Il2Cpp.module.findExportByName(_bhxb("wMNqIXjzUZe")),
	il2cpp_string_length: () => Il2Cpp.module.findExportByName(_bhxb("vjLPDzFiKnu")),
	il2cpp_string_chars: () => Il2Cpp.module.findExportByName(_bhxb("AdMhpgyGSqq")),
	il2cpp_string_new: () => Il2Cpp.module.findExportByName(_bhxb("eIAktpoELz_")),
	il2cpp_string_new_len: () => Il2Cpp.module.findExportByName(_bhxb("zgiq_getqQX")),
	il2cpp_string_new_utf16: () => Il2Cpp.module.findExportByName(_bhxb("VdrfYvPpZXB")),
	il2cpp_string_new_wrapper: () => Il2Cpp.module.findExportByName(_bhxb("uPYAtIvb_OL")),
	il2cpp_string_intern: () => Il2Cpp.module.findExportByName(_bhxb("BtiwlghiSHb")),
	il2cpp_string_is_interned: () => Il2Cpp.module.findExportByName(_bhxb("gsHxMTFivRV")),
	il2cpp_thread_current: () => Il2Cpp.module.findExportByName(_bhxb("tBGhnElOqGf")),
	il2cpp_thread_attach: () => Il2Cpp.module.findExportByName(_bhxb("zcuOLpFOSEB")),
	il2cpp_thread_detach: () => Il2Cpp.module.findExportByName(_bhxb("UQunrWynCfp")),
	il2cpp_is_vm_thread: () => Il2Cpp.module.findExportByName(_bhxb("kVpakTudGMl")),
	il2cpp_current_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName(_bhxb("eEOtlwclmRz")),
	il2cpp_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName(_bhxb("xFcJnZqjXJe")),
	il2cpp_current_thread_get_top_frame: () => Il2Cpp.module.findExportByName(_bhxb("WYLUwYTfD_b")),
	il2cpp_thread_get_top_frame: () => Il2Cpp.module.findExportByName(_bhxb("OkXhfAUoiKy")),
	il2cpp_current_thread_get_frame_at: () => Il2Cpp.module.findExportByName(_bhxb("B_eWlOTaMNV")),
	il2cpp_thread_get_frame_at: () => Il2Cpp.module.findExportByName(_bhxb("NMNaUBngCsz")),
	il2cpp_current_thread_get_stack_depth: () => Il2Cpp.module.findExportByName(_bhxb("aNICGiAzDqt")),
	il2cpp_thread_get_stack_depth: () => Il2Cpp.module.findExportByName(_bhxb("cSWbtSvccOO")),
	il2cpp_override_stack_backtrace: () => Il2Cpp.module.findExportByName(_bhxb("AyqLkCVyDNX")),
	il2cpp_type_get_object: () => Il2Cpp.module.findExportByName(_bhxb("HmTazZXjrLo")),
	il2cpp_type_get_type: () => Il2Cpp.module.findExportByName(_bhxb("hm_dFUUzPeV")),
	il2cpp_type_get_class_or_element_class: () => Il2Cpp.module.findExportByName(_bhxb("pbYVzcoztPm")),
	il2cpp_type_get_name: () => Il2Cpp.module.findExportByName(_bhxb("hTWRWUrlbBa")),
	il2cpp_type_is_byref: () => Il2Cpp.module.findExportByName(_bhxb("fkiTtgiLTmK")),
	il2cpp_type_get_attrs: () => Il2Cpp.module.findExportByName(_bhxb("jEmFBtPvUiV")),
	il2cpp_type_equals: () => Il2Cpp.module.findExportByName(_bhxb("BLMXMVmjzmS")),
	il2cpp_type_get_assembly_qualified_name: () => Il2Cpp.module.findExportByName(_bhxb("vu_ampRaHrU")),
	il2cpp_type_get_reflection_name: () => Il2Cpp.module.findExportByName(_bhxb("TiaqkhHpMnL")),
	il2cpp_type_is_static: () => Il2Cpp.module.findExportByName(_bhxb("pRWDVgyWtRg")),
	il2cpp_type_is_pointer_type: () => Il2Cpp.module.findExportByName(_bhxb("H_uoESnlRRS")),
	il2cpp_image_get_assembly: () => Il2Cpp.module.findExportByName(_bhxb("GLuOJqayZQR")),
	il2cpp_image_get_name: () => Il2Cpp.module.findExportByName(_bhxb("lyVhWgLUrlf")),
	il2cpp_image_get_filename: () => Il2Cpp.module.findExportByName(_bhxb("PigCIpUVMrv")),
	il2cpp_image_get_entry_point: () => Il2Cpp.module.findExportByName(_bhxb("xFnBrsFFshC")),
	il2cpp_image_get_class_count: () => Il2Cpp.module.findExportByName(_bhxb("AQJXifaHZhr")),
	il2cpp_image_get_class: () => Il2Cpp.module.findExportByName(_bhxb("SUOyXjfiMTs")),
	il2cpp_capture_memory_snapshot: () => Il2Cpp.module.findExportByName(_bhxb("uuNaIHgsRDh")),
	il2cpp_free_captured_memory_snapshot: () => Il2Cpp.module.findExportByName(_bhxb("yeQsHBvtdzh")),
	il2cpp_set_find_plugin_callback: () => Il2Cpp.module.findExportByName(_bhxb("cpZGhJsxyrP")),
	il2cpp_register_log_callback: () => Il2Cpp.module.findExportByName(_bhxb("vOTOcs_eOTT")),
	il2cpp_debugger_set_agent_options: () => Il2Cpp.module.findExportByName(_bhxb("AXuYYUwlfAF")),
	il2cpp_is_debugger_attached: () => Il2Cpp.module.findExportByName(_bhxb("f_fOxERiFzr")),
	il2cpp_register_debugger_agent_transport: () => Il2Cpp.module.findExportByName(_bhxb("pLlsrqJyHeK")),
	il2cpp_debug_foreach_method: () => Il2Cpp.module.findExportByName(_bhxb("jxVITNJzvii")),
	il2cpp_debug_get_method_info: () => Il2Cpp.module.findExportByName(_bhxb("wqroKNcHTkc")),
	il2cpp_unity_install_unitytls_interface: () => Il2Cpp.module.findExportByName(_bhxb("RTrFfWjqpwl")),
	il2cpp_custom_attrs_from_class: () => Il2Cpp.module.findExportByName(_bhxb("hfgqNKSImAF")),
	il2cpp_custom_attrs_from_method: () => Il2Cpp.module.findExportByName(_bhxb("QsPhZdewicZ")),
	il2cpp_custom_attrs_from_field: () => Il2Cpp.module.findExportByName(_bhxb("SDQBEDwzivo")),
	il2cpp_custom_attrs_get_attr: () => Il2Cpp.module.findExportByName(_bhxb("EIQIFGuPlsc")),
	il2cpp_custom_attrs_has_attr: () => Il2Cpp.module.findExportByName(_bhxb("FOERxyIlBfX")),
	il2cpp_custom_attrs_construct: () => Il2Cpp.module.findExportByName(_bhxb("mNpytlNpibj")),
	il2cpp_custom_attrs_free: () => Il2Cpp.module.findExportByName(_bhxb("QqIPAcpmsVF")),
	il2cpp_class_set_userdata: () => Il2Cpp.module.findExportByName(_bhxb("daBqKepuYZ_")),
	il2cpp_class_get_userdata_offset: () => Il2Cpp.module.findExportByName(_bhxb("xPqPwHTnzUH")),
	il2cpp_set_default_thread_affinity: () => Il2Cpp.module.findExportByName(_bhxb("EYBCpWgg_Ma")),
	il2cpp_unity_set_android_network_up_state_func: () => Il2Cpp.module.findExportByName(_bhxb("fsOxaZAnSQH")),
};

const QUEST_PLATFORM = 1;

function loadQuestServers() {
  console.log("\n");
  console.log(_bhxb("2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d"));
  console.log(_bhxb("51756573747365727665727320576f726b696e67"));
  console.log(_bhxb("2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d"));

  Il2Cpp.perform(() => {
    const findClass = (n: string) => {
      for (const a of Il2Cpp.domain.assemblies) {
        try {
          const k = a.image.tryClass(n);
          if (k) return k;
        } catch (_) {}
      }
      return null;
    };

    const AppUtils = findClass(_bhxb("416e696d616c436f6d70616e792e4170705574696c73"));
    if (!AppUtils) {
      console.log(_bhxb("204170705574696c7320776173206e6f7420666f756e64"));
      return;
    }

    let method: any = null;
    for (const m of AppUtils.methods) {
      if (
        /CalculatePhotonAppVersion/i.test(m.name) &&
        (m.returnType?.name || _bhxb("")) === _bhxb("53797374656d2e537472696e67")
      ) {
        method = m;
        break;
      }
    }

    if (!method) {
      console.log(_bhxb("43616c63756c61746550686f746f6e41707056657273696f6e20776173206e6f7420666f756e64"));
      return;
    }

    Interceptor.attach(method.virtualAddress, {
      onEnter(args: any) {
        try {
          args[2] = ptr(QUEST_PLATFORM);
        } catch (_) {}
      },
    });
  });
}

loadQuestServers();
