const { getRootPackage } = require('lasso-package-root');

module.exports = function(el, context) {
    // contexts are scoped to packages
    let package = getRootPackage(context.dirname)
    let packageName = package && package.name || '~';

    let setNode;
    let getNode;

    // if 
    let attributes = el.getAttributes();

    if (attributes.length) {
        setNode = context.createNodeForEl('set-context', attributes);
        setNode.setAttributeValue('__package', context.builder.literal(packageName));
        setNode.body = el.body;
    }

    if (el.argument) {
        getNode = context.createNodeForEl('get-context', attributes);
        getNode.addNestedVariable(el.argument);
        getNode.setAttributeValue('__package', context.builder.literal(packageName));
        if (setNode) {
            setNode.wrapWith(getNode);
        } else {
            getNode.body = el.body;
        }
    }

    let replacementNode = getNode || setNode;

    if (replacementNode) {
        el.replaceWith(replacementNode);
    } else {
        throw new Error();
    }
}