import * as React from 'react';
import images from '../../constants/images';

interface IProps {
   title: string;
}

const SubHeading: React.FC<IProps> = ({ title }) => (
   <div style={{ marginBottom: '1rem' }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
   </div>
);

export default SubHeading;
