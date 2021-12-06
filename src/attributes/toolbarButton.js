/* Add custom attribute to paragraph block, in Toolbar */
const { __ } = wp.i18n;

// Enable custom attributes on Paragraph block
const enableToolbarButtonOnBlocks = [
    'core/paragraph'
];

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;
const {
    ToolbarGroup,
    ToolbarButton
} = wp.components;

import classnames from 'classnames'

/**
 * Declare our custom attribute
 */
const setToolbarButtonAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableToolbarButtonOnBlocks.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
            paragraphAttribute: { type: 'string' }
        } ),
    } );
};
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'custom-attributes/set-toolbar-button-attribute',
    setToolbarButtonAttribute
);

/**
 * Add Custom Button to Paragraph Toolbar
 */
const withToolbarButton = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
    	if ( ! enableToolbarButtonOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const { paragraphAttribute } = attributes;

        return (
            <Fragment>  
                <BlockControls group="block">
                    <ToolbarGroup>
                        <ToolbarButton
                            icon="format-status"
                            label={ __( 'Custom Button', 'core-block-custom-attributes' ) }
                            isActive={ paragraphAttribute === 'custom' }
                            onClick={ () => {
                                if ( paragraphAttribute === 'custom' ) {
                                    setAttributes( { paragraphAttribute: false } )
                                } else {
                                    setAttributes( { paragraphAttribute: 'custom' } )
                                }
                            } }
                        />
                    </ToolbarGroup>
                </BlockControls>
                <BlockEdit { ...props } />
            </Fragment>
        );
    };
}, 'withToolbarButton' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'custom-attributes/with-toolbar-button',
    withToolbarButton
);


/**
 * Add custom class to block in Edit
 */
const withToolbarButtonProp = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableToolbarButtonOnBlocks.includes( props.name ) ) {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const { paragraphAttribute } = attributes;

        if ( paragraphAttribute && 'custom' === paragraphAttribute ) {
            return <BlockListBlock { ...props } className={ 'has-custom-attribute' } />
        } else {
            return <BlockListBlock { ...props } />
        }
    };
}, 'withToolbarButtonProp' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'custom-attributes/with-toolbar-button-prop',
    withToolbarButtonProp
);


/**
 * Save our custom attribute
 */
const saveToolbarButtonAttribute = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( enableToolbarButtonOnBlocks.includes( blockType.name ) ) {
        const { paragraphAttribute } = attributes;
        if ( paragraphAttribute && 'custom' === paragraphAttribute ) {
            extraProps.className = classnames( extraProps.className, 'has-custom-attribute' )
        }
    }    

    return extraProps;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'custom-attributes/save-toolbar-button-attribute',
    saveToolbarButtonAttribute
);