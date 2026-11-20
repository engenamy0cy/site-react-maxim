export type Tabs = 
    | 'contacts'
    | 'history'
    | 'info'
    ;


export type TabData = {
    lable: string;
    type: Tabs;
}