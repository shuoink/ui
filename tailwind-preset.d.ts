import type {Config} from 'tailwindcss';

type PresetOptions = {content?: Array<string>};

declare function preset(options?: PresetOptions): Config;

export = preset;
