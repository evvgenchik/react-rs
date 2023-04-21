// vite.config.ts
import react from "file:///C:/Users/croco/Desktop/coding/react-rs/react-rs/react-components/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { configDefaults, defineConfig } from "file:///C:/Users/croco/Desktop/coding/react-rs/react-rs/react-components/node_modules/vitest/dist/config.js";
var vite_config_default = defineConfig({
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjcm9jb1xcXFxEZXNrdG9wXFxcXGNvZGluZ1xcXFxyZWFjdC1yc1xcXFxyZWFjdC1yc1xcXFxyZWFjdC1jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjcm9jb1xcXFxEZXNrdG9wXFxcXGNvZGluZ1xcXFxyZWFjdC1yc1xcXFxyZWFjdC1yc1xcXFxyZWFjdC1jb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9jcm9jby9EZXNrdG9wL2NvZGluZy9yZWFjdC1ycy9yZWFjdC1ycy9yZWFjdC1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBjb25maWdEZWZhdWx0cywgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgc2V0dXBGaWxlczogWycuL3NyYy9zZXR1cFRlc3RzLnRzJ10sXG4gICAgaW5jbHVkZTogWycqKi8qLnt0ZXN0LHNwZWN9Lntqc3gsdHN4fSddLFxuICAgIGV4Y2x1ZGU6IFsuLi5jb25maWdEZWZhdWx0cy5leGNsdWRlLCAndHlwZXMudHN4LCBtYWluLnRzeCwgZGF0YSddLFxuICAgIGNvdmVyYWdlOiB7XG4gICAgICBwcm92aWRlcjogJ2M4JyxcbiAgICAgIGFsbDogdHJ1ZSxcbiAgICAgIGVuYWJsZWQ6IHRydWUsIC8vIG9yICdpc3RhbmJ1bCdcbiAgICAgIHJlcG9ydGVyOiBbJ3RleHQnXSxcbiAgICAgIGluY2x1ZGU6IFsnKiovKi57anN4LHRzeH0nXSxcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSxcbiAgICAgICAgJ3NyYy9tYWluLnRzeCcsXG4gICAgICAgICdzcmMvdXRpbHMvdHlwZXMudHN4JyxcbiAgICAgICAgJ25vZGVfbW9kdWxlcycsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxnQkFBZ0Isb0JBQW9CO0FBRTdDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMscUJBQXFCO0FBQUEsSUFDbEMsU0FBUyxDQUFDLDRCQUE0QjtBQUFBLElBQ3RDLFNBQVMsQ0FBQyxHQUFHLGVBQWUsU0FBUywyQkFBMkI7QUFBQSxJQUNoRSxVQUFVO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUE7QUFBQSxNQUNULFVBQVUsQ0FBQyxNQUFNO0FBQUEsTUFDakIsU0FBUyxDQUFDLGdCQUFnQjtBQUFBLE1BQzFCLFNBQVM7QUFBQSxRQUNQLEdBQUcsZUFBZTtBQUFBLFFBQ2xCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
