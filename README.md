# Marko `<context>`

The `<context>` tag provides a way for a parent component to implictly pass data to child components from the same package that are nested arbitrarily deep in the component tree.

## The basics

To store values into a subtree context, pass attributes to the `<context>` tag:

```marko
<context name="Frank">
    ...
</context>
```

To get values from a parent context, pass tag params to the `<context>` tag:

```marko
<context({ name })>
    Hello ${name}
</context>
```

And all together:

```marko
<context name="Frank">
    <context({ name })>
        Hello ${name}
    </context>
</context>
```

Obviously, both setting and getting context in the same component is pretty pointless.  The real power comes when using one component to set the context and retrieving it in another component.  

Imaging creating a `<special-form>` that can provide data to a `<special-input>` without requiring the use of those components to connect things together.  That's the power of `<context>`.

```marko
<special-form data=input.formData>
    <fieldset>
        <label>Name</label>
        <special-input field="name"/>
    </fieldset>
</special-form>
```

## Features

### Scoped to the package

Packages have their own context.  If `package-a` and `package-b` both set a `name` in their context, it won't conflict and `package-a` will not be able to access the `name` from `package-b`.

This means you can name the values in your context without worry of collisions with other packages outside your control.  It also forces you to encapsulate the context of your components because outside packages (or an application using your package) will not be able to access your context directly.

### Scoped to the subtree

```marko
<context name="Frank">
    <context name="Jane">
        <context({ name })>
            <div>${name}</div>
        </context>
    </context>
    <context({ name })>
        <div>${name}</div>
    </context>
</context>
```

will render:

```html
<div>Jane</div><div>Frank</div>
```

### Works across async boundaries

```marko
<context name="Frank">
    <await(daysRemaining from birthdayPromise)>
        <context({ name })>
            <div>Only ${daysRemaining} until your birthday, ${name}!</div>
        </context>
    </await>
</context>
```

### Guaranteed updates

Even if a intermediate component doesn't update, the context will still propagate to any components that are using it.
