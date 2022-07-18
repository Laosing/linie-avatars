import React, { forwardRef, LegacyRef } from "react";

type Props = {
  color?: string,
  size?: string | number,
};
type Ref = LegacyRef<SVGSVGElement> | undefined;

const Avatar09 = forwardRef(
  ({ color = "currentColor", size = 24, ...rest }: Props, ref: Ref) => {
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
        <g>
          <path
            d="M88.117,78.113c-0.263-4.116,0.122-8.507-3.246-11.692
		c-3.241-3.066-6.475-6.228-10.129-8.737c-2.157-1.481-2.779-2.44-2.011-5.023c2.303-7.743,2.584-15.738,2.016-23.756
		C73.737,14.639,64.808,5.346,51.648,4.777c-14.581-0.631-24.162,7.404-26.171,22.319c-1.241,9.213,0.595,18.239,2.608,27.183
		c0.478,2.121,0.711,3.048-1.917,4.335c-8.317,4.074-15.321,9.519-14.31,20.391c0.184,1.976,0.102,4.016-0.167,5.982
		c-0.449,3.286,1.061,4.737,4.065,5.651c11.095,3.378,22.437,4.735,33.992,4.602c9.355,0.14,18.625-0.593,27.746-2.777
		C88.84,89.744,88.859,89.737,88.117,78.113z M75.848,89.833c-8.491,1.834-17.103,2.645-24.845,2.413
		c-11.66,0.118-22.199-0.955-32.543-3.929c-2.932-0.843-4.159-2.161-3.759-5.201c0.28-2.137,0.153-4.324,0.296-6.483
		c0.421-6.378,6.197-13.572,12.178-15.414c2.108-0.649,3.38,0.1,4.683,1.704c3.003,3.699,6.918,6.19,11.362,7.848
		c0.926,0.346,2.01,0.682,2.591-0.526c0.429-0.889-0.009-1.711-0.879-1.999c-16.504-5.47-14.915-20.146-16.708-33.02
		c-0.432-3.098-0.155-6.285,0.457-9.436c2.24-11.533,9.669-17.968,21.033-18.035c11.704-0.068,19.429,6.254,21.523,18.001
		c1.631,9.15,0.97,18.285-1.696,27.162c-1.014,3.379-1.151,5.303,2.759,6.847c4.518,1.784,4.726,4.158,1.533,8.022
		c-3.31,4.007-7.743,6.15-12.65,7.536c-1.124,0.316-3.166,0.275-2.682,2.158c0.456,1.776,2.094,1.025,3.377,0.701
		c6.335-1.604,11.864-4.565,15.434-10.188c1.627-2.563,2.751-1.98,4.547-0.43c3.18,2.745,3.074,6.461,3.258,10.102
		C85.621,87.643,85.621,87.723,75.848,89.833z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#2E2E2E"
            d="M40.663,81.323c-3.633-1.588-7.117-3.422-10.336-5.759
		c-0.592-0.429-1.266-0.057-1.701,0.51c-0.652,0.849-0.228,1.545,0.42,2.123c3,2.678,6.535,4.432,10.295,5.724
		c1.071,0.368,1.877-0.275,2.165-1.519C41.253,82.065,41.047,81.491,40.663,81.323z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#2E2E2E"
            d="M59.284,65.874c3.187,0.037,5.644-1.627,7.796-3.758
		c1.304-1.292,0.322-1.99-1.142-2.652c-2.466,1.596-5.105,3.206-7.6,5.015C57.926,64.777,58.665,65.866,59.284,65.874z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#2E2E2E"
            d="M65.277,24.583c-5.503-8.294-17.709-10.446-26.072-4.723
		c-1.483,1.016-2.712,4.525-5.357,0.972c-0.52-0.697-1.695,0.626-1.754,1.696c-0.092,1.656-0.024,3.321-0.024,4.43
		c0.266,8.268,1.167,15.813,5.687,22.411c4.063,5.933,10.253,8.337,16.409,6.423C64.341,52.629,71.167,33.459,65.277,24.583z
		 M49.948,53.301c-7.873-0.015-14.987-10.628-14.633-21.832c0.199-6.309,7.231-11.798,14.98-11.694
		c7.842,0.105,14.519,5.799,14.358,12.244C64.359,43.78,57.771,53.315,49.948,53.301z"
          />
        </g>
      </svg>
    );
  }
);

Avatar09.displayName = "Avatar09";

export default Avatar09;
