/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: 'Fluent',
		author: 'danydodson',
		version: '1.0.10',
		description: 'Brings the look of Windows 11 to Discord.',
		source: 'https://github.com/danydodson/fluent',
		invite: 'ZHthyCw',
		authorId: '174868361040232448'
	},
	baseImport: 'https://raw.githubusercontent.com/danydodson/fluent/refs/heads/main/dist/Fluent.css',
	addons: [['src/addons/_icons.scss', 'dist/Icons.css']]
};
