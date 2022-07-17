import React, { forwardRef, LegacyRef } from 'react';

type Props = {
  color?: string,
  size?: string | number,
};
type Ref = LegacyRef<SVGSVGElement> | undefined;

const Avatar10 = forwardRef(
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
          d="M87.955,76.291c-0.024-0.666-0.121-1.331-0.111-1.995
	c0.086-6.228-3.064-10.368-8.467-12.977c-3.559-1.718-7.188-3.29-12.333-5.631c6.558,1.336,7.644-2.033,8.542-5.825
	c1.711-7.23,2.021-14.527,0.994-21.84C74.408,12.565,65.118,3.794,50.365,5.765c-0.648,0.087-1.328-0.033-1.991-0.083
	C36.087,4.764,27.857,10.394,24.49,22.189c-2.62,9.175-2.461,18.411-0.286,27.661c0.885,3.763,1.935,7.24,7.217,6.337
	c-0.696,0.569-1.251,0.829-1.82,1.052c-16.456,6.451-17.457,8.132-18.094,25.53c-0.162,4.42,1.409,6.165,5.353,7.25
	c19.843,5.457,39.893,5.922,59.841,1.492C91.3,88.271,88.45,89.764,87.955,76.291z M26.474,45.828
	c-1.502-7.992-1.277-15.915,1.167-23.699c3.002-9.563,10.083-14.284,20.068-13.508c0.829,0.064,1.66,0.187,2.488,0.173
	c14.542-0.251,20.737,4.622,23.256,18.798c1.293,7.279,1.007,14.611-0.927,21.796c-0.397,1.477-0.372,3.58-2.776,3.479
	c-2.961-0.125-6.166,0.846-8.798-0.555c-1.433-0.762,0.046-2.641,0.856-3.897c3.82-5.924,4.981-12.598,5.568-19.466
	c0.241-2.813-0.701-3.931-3.595-3.828c-4.659,0.164-9.327,0.044-13.992,0.039s-9.331,0.083-13.992-0.04
	c-2.64-0.069-3.504,0.983-3.363,3.568c0.369,6.739,1.663,13.182,5.098,19.097c2.606,4.487,2.287,5.037-2.657,5.107
	C27.826,52.99,27.82,52.992,26.474,45.828z M57.546,48.917c-2.082,2.353-4.739,3.577-7.536,3.399
	c-4.497,0.021-7.252-2.254-9.387-5.393c-3.259-4.793-4.454-10.263-5.044-15.937c-0.229-2.198,0.514-2.899,2.7-2.872
	c7.794,0.097,15.59,0.026,23.385,0.049c1.255,0.004,2.748-0.354,2.551,1.895C63.616,36.935,62.3,43.543,57.546,48.917z
	 M54.977,61.83c-2.86,2.2-6.296,2.146-9.343,0.46c-3.385-1.873-4.486-5.015-3.584-9.111c5.031,2.594,9.928,2.97,15.204,0.105
	C58.271,56.893,57.631,59.788,54.977,61.83z M75.097,88.939c-8.342,1.736-16.782,2.518-24.372,2.29
	c-11.473,0.137-21.841-0.988-32.041-3.809c-3.069-0.849-4.232-2.094-4.162-5.435c0.3-14.306,1.7-16.483,15.149-21.52
	c1.556-0.583,3.241-0.88,4.709-1.621c3.011-1.52,4.578-0.818,6.053,2.355c1.873,4.029,5.752,5.204,10.066,5.073
	c4.194-0.126,7.604-1.703,9.1-5.72c1.036-2.781,2.397-3.082,4.846-2.071c3.989,1.647,8.108,2.989,12.064,4.707
	c5.482,2.379,8.401,6.205,8.526,12.692C85.246,86.721,85.629,86.745,75.097,88.939z"
        />
      </svg>
    );
  }
);

Avatar10.displayName = 'Avatar10';

export default Avatar10;
