import React, { forwardRef, LegacyRef } from "react";

type Props = {
  color?: string,
  size?: string | number,
};
type Ref = LegacyRef<SVGSVGElement> | undefined;

const Avatar11 = forwardRef(
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
        <path
          d="M88.41,91.765c-0.738-7.709,2.06-16.283-4.957-22.563
	c-1.539-1.379-0.665-2.691-0.523-4.093c0.66-6.543,0.68-13.046-2.74-18.944c-2.419-4.17-3.435-8.563-3.505-13.335
	c-0.052-3.488-0.263-7.018-0.864-10.447c-1.64-9.341-5.421-17.56-15.386-20.239C42.196-2.76,24.724,2.208,23.267,27.218
	c-0.43,7.379-0.798,14.507-4.744,21.125c-1.46,2.448-2.043,5.733-2.083,8.649c-0.086,6.095,0.997,11.967-3.179,17.687
	c-2.396,3.282-0.901,8.468-1.542,12.721c-0.775,5.155,1.667,6.945,6.124,8.165c10.536,2.883,21.228,4.081,32.106,3.976
	c11.724,0.146,23.277-0.998,34.464-4.727C86.058,94.265,88.636,94.131,88.41,91.765z M22.332,47.124
	c2.465-4.532,3.688-9.221,3.641-14.325c-0.055-5.869,0.59-11.61,2.854-17.121c2.623-6.385,7.231-10.25,14.011-11.436
	c2.286-0.4,4.622-0.704,6.937-0.714c14.041-0.058,21.686,6.721,23.331,20.703c0.409,3.469,0.584,6.975,0.681,10.469
	c0.118,4.254,1.062,8.229,3.263,11.895c3.056,5.085,3.521,10.647,3.093,16.41c-0.181,2.42-0.477,3.675-3.453,2.308
	c-4.215-1.938-8.617-3.538-13.06-4.887c-3.194-0.97-3.737-2.325-1.823-4.952c1.362-1.868,2.613-3.818,3.914-5.731
	c0.128,0.101,0.248,0.212,0.383,0.301c1.61,1.061-0.063,5.182,2.793,4.221c2.688-0.903,0.526-3.772,0.054-5.67
	c-0.392-1.574-1.306-3.057-2.166-4.471c-2.937-4.828-4.295-9.927-4.021-15.674c0.423-8.854-3.116-11.98-11.981-11.315
	c-13.352,1.001-13.36,1.001-13.786,14.88c-0.127,4.128-1.884,7.686-3.642,11.296c-1.598,3.28-2.969,6.676-4.315,10.07
	c-0.364,0.92-0.286,2.12,1.049,2.354c0.958,0.168,1.431-0.652,1.739-1.449c0.571-1.475,1.114-2.96,1.686-4.486
	c0.572,0.337,0.955,0.433,1.118,0.676c5.669,8.459,5.651,8.418-3.93,11.832c-3.429,1.222-6.763,2.709-10.352,4.161
	C18.291,59.626,19.047,53.163,22.332,47.124z M42.664,55.441c-5.703-3.95-7.212-8.806-4.509-15.185
	c1.677-3.959,1.806-8.043,1.744-12.24c-0.101-6.916,1.816-8.568,8.656-7.879c0.495,0.05,0.99,0.158,1.483,0.146
	c8.983-0.203,9.962,0.759,9.759,9.911c-0.337,3.473,0.421,7.007,1.877,10.444c2.338,5.519,1.071,10.443-3.608,14.361
	C54.029,58.382,47.191,58.577,42.664,55.441z M57.843,62.274c-0.713,4.189-3.219,6.388-7.554,6.326
	c-4.74,0.04-8.352-3.142-8.385-7.287c-0.013-1.699,0.356-2.527,2.253-1.765c3.684,1.481,7.502,1.521,11.198,0.276
	C58.25,58.85,58.142,60.516,57.843,62.274z M82.118,92.443c-10.608,3.244-21.491,4.297-32.531,4.088
	c-10.536,0.155-20.883-1.043-31.063-3.9c-2.966-0.832-3.843-2.112-3.776-5.185c0.318-14.694,1.511-16.536,15.432-21.788
	c1.243-0.47,2.549-0.788,3.765-1.316c3.08-1.341,4.909-1.301,6.883,2.417c3.781,7.118,15.402,6.57,18.835-0.746
	c1.405-2.996,2.802-3.113,5.291-2.128c2.007,0.794,4.096,1.383,6.096,2.192c15.894,6.433,13.574,8.065,14.466,22.91
	C85.667,91.547,83.895,91.899,82.118,92.443z"
        />
      </svg>
    );
  }
);

Avatar11.displayName = "Avatar11";

export default Avatar11;
