import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import {getAspDotNetCertificate} from "./certs";

const cert = getAspDotNetCertificate();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		outDir: '../wwwroot/client-components',
		emptyOutDir: true,
		lib: {
			entry: 'src/main.ts',
			name: 'MyLib',
			fileName: 'my-lib'
		}
	},
	server: {
		strictPort: true,
		hmr: {
			clientPort: 5173,
		},
		https: {
			cert: cert.certificate,
			key: cert.privateKey
		}
	},
});
