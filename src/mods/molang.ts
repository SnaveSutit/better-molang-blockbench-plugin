import { BlockbenchMod } from '../mods'
import { MoLang } from 'molang'

class newMolang {
	env: any
	molang: MoLang

	constructor() {
		this.env = new Proxy(
			{},
			{
				get(o: any, k: string) {
					return o[k]
				},
			}
		)
		this.molang = new MoLang(this.env, { useCache: true, useRadians: false })
	}

	get global_variables() {
		return this.env
	}

	set global_variables(v) {
		Object.assign(this.env, v)
	}

	parse(input: string, variables: any) {}
}

// @ts-ignore
const oldMolang = Molang
new BlockbenchMod({
	name: 'Overwrite Global: Molang',
	inject() {
		// @ts-ignore
		Molang = new newMolang()
	},
	extract() {
		// @ts-ignore
		Molang = oldMolang
	},
})
