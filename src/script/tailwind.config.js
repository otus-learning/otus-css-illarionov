import("../css/style.css");
if (window.innerWidth > 900) {
    import("../css/style-desktop.css");
}

import "../pic/bg.png";
import "../pic/bg-mobile.jpg";
import "../pic/cameron.png";
import "../pic/jess.png";
import "../pic/katy.png";
import "../pic/katy-mobile.jpg";
import "../pic/louisse.png";
import "../pic/stgh1.png";
import "../pic/stgh2.png";
import "../pic/stgh3.png";
import "../pic/test.png";

tailwind.config = {
	theme: {
		extend: {
			spacing: {
				'rem45': '4.5rem',
				'em07': '0.7em',
				'em08': '0.8em',
				'em13': '1.3em',
				'vh13': '13vh',
				'vh18': '18vh',
				'vh28': '28vh',
				'vh37': '37vh',
				/*'vh43':	'43vh',*/
				'vh45': '45vh',
				'vh50': '50vh',
				'vh55': '55vh',
				/*'vh63': '63vh',*/
				'vh72': '72vh',
				'vh73': '73vh',
				'vh80': '80vh',
				'vh87': '87vh',
				'vh92': '92vh',
				'vw60': '60vw',
				'vw90': '90vw',
				'%4': '4%',
				'%7': '7%',
				'%9': '9%',
				'%11': '11%',
				'%13': '13%',
				'%15': '15%',
				'%20': '20%',
				'%25': '25%',
				'%28': '28%',
				'%37': '37%',
				'%40': '40%',
				'%43': '43%',
				'%53': '53%',
				'%56': '56%',
				'%63': '63%',
				'%72': '72%',
				'%76': '76%',
				'%87': '87%',
				'%92': '92%',
				'%95': '95%',
				'px221': '221px',
				'px650': '650px',
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				serif: ['Butler', 'serif'],
			},
			fontSize: {
				'em02': '0.2em',
				'em025': '0.25em',
				'em035': '0.35em',
				'em042': '0.42em',
				'rem125': '1.25rem',
				'rem2': '2rem',
				'rem45': '4.5rem',
				'rem55': '5.5rem',
			},
			lineHeight: {
				'11': '1.1',
			},
			screens: {
				'mbp': '900px',
				'bpX0': {'raw': '(max-width: 1100px)'},
				'bpX1': {'raw': '(max-width: 1200px)'},
				'bpX2': {'raw': '(max-width: 900px)'},
				'bpX3': {'raw': '(max-width: 425px)'},
				'bpX4': {'raw': '(min-width: 450px)'},
				'bpX5': {'raw': '(min-width: 620px)'},
				'bpX6': {'raw': '(min-width: 900px)'},
				'bpY0': {'raw': '(max-height: 899px)'},
				'bpY1': {'raw': '(max-height: 810px)'},
				'bpY2': {'raw': '(min-height: 1100px)'},
				'bpY3': {'raw': '(min-height: 1500px)'},
			},
		}
	}
}
