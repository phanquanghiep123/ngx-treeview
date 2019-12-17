import { EventEmitter, SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
import { TreeviewI18n } from './treeview-i18n';
import { TreeviewItem, TreeviewSelection } from './treeview-item';
import { TreeviewConfig } from './treeview-config';
import { TreeviewEventParser } from './treeview-event-parser';
import { TreeviewHeaderTemplateContext } from './treeview-header-template-context';
import { TreeviewItemTemplateContext } from './treeview-item-template-context';
export declare class TreeviewComponent implements OnChanges {
    i18n: TreeviewI18n;
    private defaultConfig;
    private eventParser;
    headerTemplate: TemplateRef<TreeviewHeaderTemplateContext>;
    itemTemplate: TemplateRef<TreeviewItemTemplateContext>;
    items: TreeviewItem[];
    config: TreeviewConfig;
    selectedChange: EventEmitter<any[]>;
    filterChange: EventEmitter<string>;
    headerTemplateContext: TreeviewHeaderTemplateContext;
    allItem: TreeviewItem;
    filterText: string;
    filterItems: TreeviewItem[];
    selection: TreeviewSelection;
    constructor(i18n: TreeviewI18n, defaultConfig: TreeviewConfig, eventParser: TreeviewEventParser);
    readonly hasFilterItems: boolean;
    readonly maxHeight: string;
    ngOnChanges(changes: SimpleChanges): void;
    onAllCollapseExpand(): void;
    onFilterTextChange(text: string): void;
    onAllCheckedChange(): void;
    onItemCheckedChange(item: TreeviewItem, checked: boolean): void;
    raiseSelectedChange(): void;
    private createHeaderTemplateContext();
    private generateSelection();
    private updateFilterItems();
    private filterItem(item, filterText);
    private updateCheckedOfAll();
    private updateCollapsedOfAll();
}
