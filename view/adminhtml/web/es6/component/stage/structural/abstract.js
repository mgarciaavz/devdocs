import EditableArea from './editable-area';
import { Options } from "./options";
import { Option } from "./options/option";
import $t from 'mage/translate';
import ko from 'knockout';
/**
 * AbstractStructural class
 *
 * @author Dave Macaulay <dmacaulay@magento.com>
 */
export class AbstractStructural extends EditableArea {
    /**
     * Abstract structural constructor
     *
     * @param parent
     * @param stage
     */
    constructor(parent, stage) {
        super(stage);
        this.wrapperStyle = ko.observable({ width: '100%' });
        this.options = [
            new Option(this, 'move', '<i></i>', $t('Move'), false, ['move-structural'], 10),
            new Option(this, 'edit', '<i></i>', $t('Edit'), this.onOptionEdit.bind(this), ['edit-block'], 50),
            new Option(this, 'duplicate', '<i></i>', $t('Duplicate'), this.onOptionDuplicate.bind(this), ['duplicate-structural'], 60),
            new Option(this, 'remove', '<i></i>', $t('Remove'), this.onOptionRemove.bind(this), ['remove-structural'], 100)
        ];
        this.optionsInstance = new Options(this, this.options);
        this.children = ko.observableArray([]);
        this.template = 'Gene_BlueFoot/component/stage/structural/abstract.html';
        this.childTemplate = 'Gene_BlueFoot/component/stage/structural/children.html';
        super.setChildren(this.children);
        this.parent = parent;
        this.stage = stage;
    }
    onOptionEdit() {
    }
    /**
     * Handle duplicate of items
     */
    onOptionDuplicate() {
        // @todo discuss how to best duplicate a block
    }
    /**
     * Handle block removal
     */
    onOptionRemove() {
        this.stage.parent.confirmationDialog({
            title: 'Confirm Item Removal',
            content: 'Are you sure you want to remove this item? The data within this item is not recoverable once removed.',
            actions: {
                confirm: () => {
                    // Call the parent to remove the child element
                    this.parent.emit('blockRemoved', {
                        block: this
                    });
                }
            }
        });
    }
    /**
     * Retrieve the template from the class
     *
     * @deprecated use this.template instead
     * @returns {string}
     */
    getTemplate() {
        return this.template;
    }
    /**
     * Retrieve the child template
     *
     * @deprecated
     * @returns {string}
     */
    getChildTemplate() {
        return this.childTemplate;
    }
}
