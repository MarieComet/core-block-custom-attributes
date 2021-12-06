/* Add custom attribute to image block, in Sidebar */
const { __ } = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = [
    'core/image'
];

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;

import classnames from 'classnames'

/**
 * Declare our custom attribute
 */
const setSidebarSelectAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableSidebarSelectOnBlocks.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
            imageAttribute: { type: 'string' }
        } ),
    } );
};
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'custom-attributes/set-sidebar-select-attribute',
    setSidebarSelectAttribute
);

/**
 * Add Custom Select to Image Sidebar
 */
const withSidebarSelect = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
    	if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const { imageAttribute } = attributes;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                	<PanelBody
    	                title={ __( 'Image Custom Attributes' ) }
    	            >
	                    <SelectControl
                            label={ __( 'Custom Attribute' ) }
                            value={ imageAttribute }
                            options={ [
                                {
                                    label: __( 'None' ),
                                    value: ''
                                },
                                {
                                    label: __( 'One' ),
                                    value: 'one'
                                }
                            ] }
                            onChange={ ( value ) => {
                                setAttributes( {
                                    imageAttribute: value,
                                } );
                            } }
                        /> 
	                </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withSidebarSelect' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'custom-attributes/with-sidebar-select',
    withSidebarSelect
);


/**
 * Add custom class to block in Edit
 */
const withSidebarSelectProp = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const { imageAttribute } = attributes;

        if ( imageAttribute ) {
            return <BlockListBlock { ...props } className={ 'has-option-' + imageAttribute } />
        } else {
            return <BlockListBlock { ...props } />
        }
    };
}, 'withSidebarSelectProp' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'custom-attributes/with-sidebar-select-prop',
    withSidebarSelectProp
);


/**
 * Save our custom attribute
 */
const saveSidebarSelectAttribute = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( enableSidebarSelectOnBlocks.includes( blockType.name ) ) {
        const { imageAttribute } = attributes;
        if ( imageAttribute ) {
            extraProps.className = classnames( extraProps.className, 'has-option-' + imageAttribute )
        }
    }    

    return extraProps;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'custom-attributes/save-sidebar-select-attribute',
    saveSidebarSelectAttribute
);