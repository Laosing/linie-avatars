import React, { forwardRef, LegacyRef } from 'react';

type Props = {
  color?: string,
  size?: string | number,
};
type Ref = LegacyRef<SVGSVGElement> | undefined;

const Avatar16 = forwardRef(
  ({ color = 'currentColor', size = 24, ...rest }: Props, ref: Ref) => {
    return (
      <svg
        ref={ref}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        {...rest}
      >
        <path
          d="M75.187,62.867c-4.262-1.845-8.747-3.183-13.16-4.66
	c-1.626-0.545-2.034-1.616-1.691-3.076c0.276-1.176,1.171-0.896,1.962-0.567c4.61,1.913,8.179,0.708,10.432-3.731
	c2.118-4.174,0.978-9.128-3.251-12.397c-2.385-1.844-1.882-3.429-0.95-5.568c5.839-13.408,1.96-23.284-11.271-28.849
	C43.481-1.775,27.752,8.008,27.557,22.959c-0.125,9.523,3.49,18.456,7.463,26.889c3.637,7.719,4.259,7.426-4.03,10.256
	c-17.695,6.043-19.635,8.842-19.827,27.229c-0.035,3.291,1.125,4.716,4.107,5.655c11.251,3.542,22.803,4.654,34.512,4.685
	c7.175,0.003,14.338-0.344,21.396-1.639c4.246-0.778,8.444-1.896,12.588-3.117c1.61-0.475,3.553-0.671,4.173-3.009
	C91.008,78.336,86.106,67.595,75.187,62.867z M68.845,51.266c-1.362,1.204-3.058,1.694-4.583,0.881
	c-2.17-1.158-0.133-2.546,0.25-3.743c0.793-2.479,1.8-4.89,2.915-7.85C71.157,44.445,71.595,48.835,68.845,51.266z M30.63,28.246
	c-0.913-7.205,0.337-13.767,6.379-18.393c6.066-4.644,12.518-5.659,20.132-2.817c7.599,2.837,10.881,7.611,10.718,15.347
	c0,0.483,0.087,1.001-0.015,1.479c-0.493,2.315,0.396,5.819-2.245,6.477c-2.154,0.537-3.794-2.381-4.835-4.426
	c-1.758-3.448-3.434-1.956-5.336-0.267c-5.776,5.131-12.485,7.363-20.237,6.753C32.354,32.176,30.979,31.004,30.63,28.246z
	 M33.776,36.914c0.199-1.88,1.238-1.606,2.375-1.525c7.497,0.535,14.068-1.806,19.938-6.363c0.856-0.664,1.429-1.509,2.849-0.383
	c5.892,4.677,6.776,7.594,4.161,15.34c-2.663,7.889-7.238,11.851-13.622,11.794C41.309,55.702,32.87,45.461,33.776,36.914z
	 M57.293,60.517c-0.463,3.87-3.428,6.151-7.747,6.138c-2.869,0.134-5.253-0.84-6.825-3.29c-1.083-1.688-2.2-3.777-0.979-5.547
	c1.051-1.522,2.645,0.365,4.02,0.57c3.011,0.449,6.041,0.683,8.847-0.447C57.89,56.619,57.514,58.68,57.293,60.517z M81.172,90.614
	c-10.281,3.193-20.867,4.008-32.779,4.083c-9.619-0.091-20.35-0.966-30.818-4.15c-2.506-0.762-3.76-1.841-3.338-4.5
	c0.077-0.488,0.02-0.997,0.029-1.496c0.239-13.394,8.896-22.287,22.419-23.23c1.917-0.134,2.165,0.992,2.722,2.19
	c2.07,4.461,5.727,6.193,10.484,6.131c4.631-0.062,8.085-1.936,9.674-6.398c0.773-2.17,1.971-2.318,3.813-1.632
	c2.333,0.87,4.742,1.544,7.047,2.479c16.111,6.545,13.598,8.1,14.552,22.878C85.161,89.843,83.066,90.025,81.172,90.614z"
        />
      </svg>
    );
  }
);

Avatar16.displayName = 'Avatar16';

export default Avatar16;