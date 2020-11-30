const ConcatClasses = (...args) => {
    const classes = []

    for (let i in args) {
        let arg = args[i]

        if (!arg) continue

        let type = typeof arg

        // eslint-disable-next-line default-case
        switch (true) {
        case type === 'string' || type === 'number':
            classes.push(arg)
            break

        case Array.isArray(arg) && arg.length:
            // eslint-disable-next-line no-case-declarations
            let inner = ConcatClasses.apply(null, arg)
            classes.push(inner)
            break

        case type === 'object':
            for (let key in arg) {
                if (Object.hasOwnProperty.call(arg, key) && arg[key])
                    classes.push(key)
            }
            break
        }
    }

    return classes.join(' ')
}

export { ConcatClasses }
