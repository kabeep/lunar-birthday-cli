#!/usr/bin/env node
import process from 'node:process';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import main, { i18n, type Options } from '../src';

process.on('SIGINT', function() {
    process.exit(0);
});

const palette = (code: number) => (text: string) => `\u001B[${code}m${text}\u001B[39m`;
const grey = palette(90);
const yellow = palette(33);

main(
    yargs(hideBin(process.argv))
        .scriptName('birthday')
        .usage(i18n('CMD_USAGE'))
        .options('mode', {
            alias: 'm',
            type: 'string',
            choices: ['e', 'n', 'd', 'c'],
            desc: 'e(gg), n(ow), d(ecade)，c(entury)',
            default: 'e',
        })
        .example(yellow('birthday 1997 05 08'), i18n('CMD_USAGE_EG_ARGS'))
        .example(yellow('birthday 1997-05-08'), i18n('CMD_USAGE_EG_ISO'))
        .example(yellow('birthday 05/08/1997'), i18n('CMD_USAGE_EG_US'))
        .example(yellow('birthday 1997/05/08'), i18n('CMD_USAGE_EG_VARIANT'))
        .example(yellow('birthday May 8, 1997'), i18n('CMD_USAGE_EG_WRITTEN'))
        .example(grey('-------'), '')
        .example(yellow('birthday 1997-5-8'), i18n('CMD_USAGE_EG_EGG'))
        .example(yellow('birthday -m n 1997-5-8'), i18n('CMD_USAGE_EG_NOW'))
        .example(yellow('birthday -m d 1997-5-8'), i18n('CMD_USAGE_EG_DECADE'))
        .example(yellow('birthday -m c 1997-5-8'), i18n('CMD_USAGE_EG_CENTURY'))
        .epilog(grey('* ' + i18n('CMD_USAGE_EPILOG')))
        .alias({
            v: 'version',
            h: 'help',
        })
        .parse() as Options,
);
