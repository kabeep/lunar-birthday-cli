import get from 'lodash.get';
import template from 'lodash.template';
import locale from '../locale';

interface NestedRecord {
    [key: string]: string | NestedRecord;
}

type Paths<T> =
    T extends Record<string, unknown>
        ? {
              [K in keyof T]: K;
          }[keyof T]
        : never;

class I18n<T extends NestedRecord> {
    protected readonly dictionary: NestedRecord;

    constructor(locale: NestedRecord) {
        this.dictionary = locale;
        this.i18n = this.i18n.bind(this);
    }

    public i18n(path: Paths<T>, variables?: Record<string, string>): string {
        const value = get(this.dictionary, path);

        if (typeof value === 'string') {
            return this.compiled(value, variables);
        }

        return path;
    }

    protected compiled(value: string, variables?: Record<string, string>) {
        if (variables) return this.compiler(value)(variables);
        return value;
    }

    private compiler(value: string) {
        return template(value, { interpolate: /{{([\s\S]+?)}}/g });
    }
}

const instance = new I18n<typeof locale>(locale);

export default instance.i18n;
