import * as React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

interface IData {
   price: string;
   tags: string;
   title: string;
   imgUrl: string;
   subtitle: string;
}

const SpecialMenu = () => {
   const specialMenuItems = (menuCategory: string): JSX.Element[] => {
      const dataObjectKeys = menuCategory as keyof typeof data;

      return data[dataObjectKeys].map((menuItem: IData, index: number) => (
         <MenuItem
            key={menuItem.title + index}
            title={menuItem.title}
            price={menuItem.price}
            tags={menuItem.tags}
         />
      ));
   };

   return (
      <div className="app__specialMenu flex__center section__padding" id="menu">
         <div className="app__specialMenu-title">
            <SubHeading title="Menu That Fits You Palatte" />
            <h1 className="headtext__cormorant">Today's Special</h1>
         </div>

         <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine flex__center">
               <p className="app__specialMenu-menu_heading">Wine & Beer</p>
               <div className="app__specialMenu_menu_items">{specialMenuItems('wines')}</div>
            </div>

            <div className="app__specialMenu-menu_img">
               <img src={images.menu} alt="menu img" />
            </div>

            <div className="app__specialMenu-menu_cocktails flex__center">
               <p className="app__specialMenu-menu_heading">Cocktails</p>
               <div className="app__specialMenu_menu_items">{specialMenuItems('cocktails')}</div>
            </div>
         </div>
         <div style={{ marginTop: '15px' }}>
            <button type="button" className="custom__button">
               View More
            </button>
         </div>
      </div>
   );
};

export default SpecialMenu;
