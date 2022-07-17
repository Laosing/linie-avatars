import React, { forwardRef, LegacyRef } from 'react';

type Props = {
  color?: string,
  size?: string | number,
};
type Ref = LegacyRef<SVGSVGElement> | undefined;

const Avatar06 = forwardRef(
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
          d="M71.403,59.911c-1.219-0.53-2.494-0.926-3.738-1.396
	c-4.186-1.581-5.514-4.96-3.648-8.979c1.258-2.707,2.186-5.58,3.576-8.212c3.189-6.039,3.168-13.733,10.031-17.961
	c2.727-1.679,3.145-5.813-0.648-6.509c-5.215-0.959-7.67-3.63-9.584-8.121c-1.105-2.59-4.004-3.916-6.678-4.952
	C54.461,1.356,48.098,1.049,41.639,2.94c-6.432,1.882-10.117,5.918-12.154,12.524C25.846,27.263,30.5,37.35,34.852,47.547
	c3.029,7.096,2.475,9.073-4.73,11.834C14.032,65.544,10.944,70.249,11.11,87.23c0.035,3.647,1.369,5.301,4.719,6.334
	c11.254,3.475,22.805,4.502,33.898,4.723c12.275-0.242,23.854-1.24,35.033-4.949c1.979-0.656,4.139-1.104,4.137-4.128
	C88.889,70.359,88.315,67.289,71.403,59.911z M76.872,18.98c-1.99,3.857-4.447,5.764-7.51,5.821
	c-11.408,0.215-22.822,0.086-34.266-0.408C48.159,17.021,62.217,18.738,76.872,18.98z M40.637,6.468
	c8.156-2.807,16.012-2.616,23.176,2.711c1.127,0.838,1.893,2.299,2.541,3.612c0.99,2.004,0.355,3.001-2.049,2.999
	c-4.146-0.003-8.301,0.104-12.438,0.378c-7.033,0.466-13.756,2.121-20.469,6.486C32.436,15.267,33.331,8.982,40.637,6.468z
	 M35.032,31.125c0.623-2.218,1.58-3.411,4.119-3.286c3.822,0.188,7.662,0.05,11.494,0.05c0,0.005,0,0.01,0,0.015
	c3.5,0,7.016,0.215,10.492-0.063c3.129-0.251,4.076,1.206,4.344,3.948c0.783,8.009-2.377,14.692-7.232,20.605
	C55.698,55.5,45.584,55.551,42.188,53C37.28,49.312,33.36,37.09,35.032,31.125z M62.106,61.902
	c-1.496,5.042-5.477,6.241-10.006,6.641c-0.824,0.072-1.66,0.01-2.49,0.01c-4.799-0.147-9.346-0.761-11.451-6.07
	c-0.904-2.281-0.195-4.418,0.906-6.176c1.393-2.223,2.813,0.343,4.205,0.623c4.641,0.932,9.174,0.979,13.799-0.135
	c1.193-0.288,2.41-2.656,3.764-0.52C61.879,57.925,62.749,59.735,62.106,61.902z M85.924,87.998
	c-0.447,2.619-2.369,2.564-3.928,3.043c-10.43,3.196-21.18,4.123-32.029,4.252c-10.68-0.178-21.236-1.192-31.592-4.023
	c-3.262-0.893-4.361-2.496-4.271-5.972c0.361-14.224,3.873-18.986,17.57-23.392c2.346-0.754,3.01-0.193,3.879,1.968
	c2.686,6.669,8.555,7.745,14.828,7.699c6.123-0.045,11.783-1.299,14.223-7.821c0.906-2.424,1.922-2.729,4-1.711
	c1.637,0.801,3.389,1.363,5.037,2.145C84.176,69.172,87.874,76.588,85.924,87.998z"
        />
      </svg>
    );
  }
);

Avatar06.displayName = 'Avatar06';

export default Avatar06;
