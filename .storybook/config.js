import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';


//NISAN: "global style" example
// import "../bootstrap-reboot.min.css";
// import "../bootstrap.css";
// import "../bootstrap-grid.css";
// import "../main.css";

	
// addParameters({
// 	options: {
// 		theme: crfTheme
// 	//	theme: nisanTheme
// 	}
// });

addDecorator(withInfo({
	inline: true
}));

addDecorator(withKnobs);

function loadStories(){
	const req= require.context('../stories', true, /\.stories\.js$/);
	req .keys().forEach(filename => req(filename));
}
configure(loadStories, module);
