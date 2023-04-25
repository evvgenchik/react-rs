// vite.config.ts
import react from "file:///C:/Users/croco/Desktop/coding/react-rs/react-rs/react-components/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { configDefaults, defineConfig } from "file:///C:/Users/croco/Desktop/coding/react-rs/react-rs/react-components/node_modules/vitest/dist/config.js";
var vite_config_default = defineConfig({
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: "/path/to/main.js"
    }
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    include: ["**/*.{test,spec}.{jsx,tsx}"],
    exclude: [...configDefaults.exclude, "types.tsx, main.tsx, data"],
    coverage: {
      provider: "c8",
      all: true,
      enabled: true,
      // or 'istanbul'
      reporter: ["text"],
      include: ["**/*.{jsx,tsx}"],
      exclude: [
        ...configDefaults.exclude,
        "src/main.tsx",
        "src/utils/types.tsx",
        "node_modules"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjcm9jb1xcXFxEZXNrdG9wXFxcXGNvZGluZ1xcXFxyZWFjdC1yc1xcXFxyZWFjdC1yc1xcXFxyZWFjdC1jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjcm9jb1xcXFxEZXNrdG9wXFxcXGNvZGluZ1xcXFxyZWFjdC1yc1xcXFxyZWFjdC1yc1xcXFxyZWFjdC1jb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9jcm9jby9EZXNrdG9wL2NvZGluZy9yZWFjdC1ycy9yZWFjdC1ycy9yZWFjdC1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBjb25maWdEZWZhdWx0cywgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgLy8gZ2VuZXJhdGUgbWFuaWZlc3QuanNvbiBpbiBvdXREaXJcbiAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBvdmVyd3JpdGUgZGVmYXVsdCAuaHRtbCBlbnRyeVxuICAgICAgaW5wdXQ6ICcvcGF0aC90by9tYWluLmpzJyxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6IFsnLi9zcmMvc2V0dXBUZXN0cy50cyddLFxuICAgIGluY2x1ZGU6IFsnKiovKi57dGVzdCxzcGVjfS57anN4LHRzeH0nXSxcbiAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ3R5cGVzLnRzeCwgbWFpbi50c3gsIGRhdGEnXSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcHJvdmlkZXI6ICdjOCcsXG4gICAgICBhbGw6IHRydWUsXG4gICAgICBlbmFibGVkOiB0cnVlLCAvLyBvciAnaXN0YW5idWwnXG4gICAgICByZXBvcnRlcjogWyd0ZXh0J10sXG4gICAgICBpbmNsdWRlOiBbJyoqLyoue2pzeCx0c3h9J10sXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgIC4uLmNvbmZpZ0RlZmF1bHRzLmV4Y2x1ZGUsXG4gICAgICAgICdzcmMvbWFpbi50c3gnLFxuICAgICAgICAnc3JjL3V0aWxzL3R5cGVzLnRzeCcsXG4gICAgICAgICdub2RlX21vZHVsZXMnLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBR0EsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZ0JBQWdCLG9CQUFvQjtBQUU3QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUE7QUFBQSxJQUVMLFVBQVU7QUFBQSxJQUNWLGVBQWU7QUFBQTtBQUFBLE1BRWIsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLHFCQUFxQjtBQUFBLElBQ2xDLFNBQVMsQ0FBQyw0QkFBNEI7QUFBQSxJQUN0QyxTQUFTLENBQUMsR0FBRyxlQUFlLFNBQVMsMkJBQTJCO0FBQUEsSUFDaEUsVUFBVTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBO0FBQUEsTUFDVCxVQUFVLENBQUMsTUFBTTtBQUFBLE1BQ2pCLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxNQUMxQixTQUFTO0FBQUEsUUFDUCxHQUFHLGVBQWU7QUFBQSxRQUNsQjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
