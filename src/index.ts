import * as events from './events'
import './mods'

BBPlugin.register('better_molang', {
	title: 'Better Molang',
	author: 'SnaveSutit',
	description: 'Replaces the built-in molang parser with the parser used by Bridge',
	icon: 'molang',
	variant: 'desktop',
	version: '1.0.0',
	min_version: '4.2.0',
	tags: ['Minecraft: Bedrock Edition', 'molang', 'bridge'],
	onload() {
		events.load.trigger()
	},
	onunload() {
		events.unload.trigger()
	},
	oninstall() {
		console.log(events)
		events.install.trigger()
	},
	onuninstall() {
		events.uninstall.trigger()
	},
})
