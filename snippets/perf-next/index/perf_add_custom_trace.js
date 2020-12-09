// This snippet file was generated by processing the source file:
// ./perf-next/index.js
//
// To make edits to the snippets in this file, please edit the source

// [START perf_add_custom_trace_modular]
import { trace } from "firebase/performance";

const t = trace(perf, "CUSTOM_TRACE_NAME");
t.start();

// Code that you want to trace 
// ...

t.stop();
// [END perf_add_custom_trace_modular]