import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import cssClass from './categories.module.css';


class categories extends Component {
    render() {
        let {showCategorySelected, categories} = this.props;
        return (
            <Tabs
                className={cssClass.Tabs}
                onChange={showCategorySelected}
                indicatorColor="none"
                textColor="primary"
                orientation='horizontal'
                variant="scrollable"
                scrollButtons="on"
                value={categories[0].category_id}
                aria-label="scrollable auto tabs example"
            >
                <Tab
                  
                  key='All'
                  label={<span className={cssClass.name}>View All</span>} value='Alll'
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.568)", 
                          borderRadius: "9px",
                          marginLeft:"10px",
                            height: '180px'}} /> 
                {categories.map(cat => (
                    <Tab
                        label={<span className={cssClass.name}>{cat.category_name} </span>}
                        value={cat.category_id}
                        key={cat.category_id}
                        style={{
                            backgroundImage: "url(" + cat.category_image + ")",
                            borderRadius: "9px",
                            marginLeft: "10px",
                            height: '180px'
                        }}
                    />
                    
                ))} 
                  <Tab
                  
                      key='Allr'
                      label={<span className={cssClass.name}>View All</span>} value='All'
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.568)", 
                              borderRadius: "9px",
                              marginLeft:"10px",
                                height: '180px'}} /> 
            </Tabs>
        );
    }
}

export default categories;
