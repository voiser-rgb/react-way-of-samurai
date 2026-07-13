import React from 'react';

const GalaxyAnimation = () => {
	return (
		<svg
			width="150"
			height="150"
			viewBox="0 0 250 250"
		>
			<defs>
				<filter id="glow">
					<feGaussianBlur stdDeviation="4" result="blur"/>
					<feMerge>
						<feMergeNode in="blur"/>
						<feMergeNode in="SourceGraphic"/>
					</feMerge>
				</filter>

				<radialGradient id="core">
					<stop offset="0%" stopColor="#ffffff"/>
					<stop offset="50%" stopColor="#ffe066"/>
					<stop offset="100%" stopColor="#ff6b00"/>
				</radialGradient>
			</defs>

			<g filter="url(#glow)">
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 125 125"
					to="360 125 125"
					dur="12s"
					repeatCount="indefinite"
				/>

				{/* Ядро */}
				<circle
					cx="125"
					cy="125"
					r="12"
					fill="url(#core)"
				>
					<animate
						attributeName="r"
						values="10;18;10"
						dur="1.8s"
						repeatCount="indefinite"
					/>
				</circle>

				{/* Частицы */}
				<circle cx="125" cy="125" r="3" fill="#fff">
					<animate attributeName="cx"
							 values="125;200;125"
							 dur="2.5s"
							 repeatCount="indefinite"/>
					<animate attributeName="cy"
							 values="125;50;125"
							 dur="2.5s"
							 repeatCount="indefinite"/>
					<animate attributeName="opacity"
							 values="1;0;1"
							 dur="2.5s"
							 repeatCount="indefinite"/>
				</circle>

				<circle cx="125" cy="125" r="3" fill="#66ccff">
					<animate attributeName="cx"
							 values="125;40;125"
							 dur="2.2s"
							 begin=".3s"
							 repeatCount="indefinite"/>
					<animate attributeName="cy"
							 values="125;70;125"
							 dur="2.2s"
							 begin=".3s"
							 repeatCount="indefinite"/>
					<animate attributeName="opacity"
							 values="1;0;1"
							 dur="2.2s"
							 begin=".3s"
							 repeatCount="indefinite"/>
				</circle>

				<circle cx="125" cy="125" r="3" fill="#ff99ff">
					<animate attributeName="cx"
							 values="125;210;125"
							 dur="2.8s"
							 begin=".6s"
							 repeatCount="indefinite"/>
					<animate attributeName="cy"
							 values="125;190;125"
							 dur="2.8s"
							 begin=".6s"
							 repeatCount="indefinite"/>
					<animate attributeName="opacity"
							 values="1;0;1"
							 dur="2.8s"
							 begin=".6s"
							 repeatCount="indefinite"/>
				</circle>
			</g>
		</svg>
	);
};


export default GalaxyAnimation;