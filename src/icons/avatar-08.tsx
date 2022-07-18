import React, { forwardRef, LegacyRef } from "react";

type Props = {
  color?: string,
  size?: string | number,
};
type Ref = LegacyRef<SVGSVGElement> | undefined;

const Avatar08 = forwardRef(
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
          d="M72.613,62.534c-0.903-0.395-1.821-0.758-2.742-1.113
	c-7.935-3.06-8.516-4.573-5.154-12.16c1.259-2.842,2.146-5.855,3.098-8.823c0.397-1.239,0.362-2.65,1.645-3.439
	c3.156-1.941,3.667-5.243,4.474-8.447c2.024-8.044-2.893-14.762-4.23-22.16c-0.195-1.079-1.557-2.539-2.612-2.776
	c-6.83-1.527-13.583-3.688-20.711-3.351c-0.614,0.03-1.194,0.533-1.813,0.755C37.889,3.415,29.66,3.876,28.904,13.636
	c-0.007,0.094-0.297,0.14-0.405,0.255c-5.57,5.945-5.455,16.929,0.415,22.471c1.544,1.459,2.262,3.024,2.798,4.997
	c0.772,2.84,1.832,5.634,3.062,8.313c3.036,6.621,2.205,8.952-4.392,11.475c-16.519,6.32-19.472,10.841-19.105,28.267
	c0.068,3.241,1.314,4.646,4.201,5.553c11.113,3.491,22.541,4.554,34.099,4.803c11.723-0.228,23.346-1.173,34.556-4.928
	c1.757-0.588,3.595-0.931,4.013-3.62C90.457,76.309,86.354,68.541,72.613,62.534z M29.227,31.249
	c-1.881-3.869-3.399-8.627-1.326-11.496c2.705-3.744,3.669-9.339,6.818-11.33c5.097-3.222,11.348-6.665,17.902-4.945
	c3.206,0.841,5.902,2.06,9.522,1.657c3.972-0.441,6.279,2.692,5.924,6.788c-0.185,2.131,0.23,3.538,1.525,5.299
	c3.026,4.112,1.754,8.741,0.364,13.758c0.964-5.33-0.309-6.524-5.15-4.442c-3.417,1.469-6.386-0.62-7.763-4.212
	c-0.655-1.709-1.142-3.007-3.464-1.813c-3.778,1.944-7.687,1.574-11.412-0.279c-2.484-1.236-3.453-0.683-3.83,2.129
	c-0.367,2.735-2.437,4.683-5.145,4.361C29.304,26.258,29.249,28.463,29.227,31.249z M32.818,32.325
	c-0.086-0.478-0.222-1.012-0.093-1.447c0.116-0.389,0.637-1.012,0.857-0.965c5.277,1.126,5.607-7.565,11.239-5.644
	c0.309,0.105,0.641,0.253,0.951,0.231c4.946-0.349,9.763-0.453,13.181,4.193c0.479,0.652,1.859,1.107,2.696,0.957
	c6.375-1.147,4.845,2.916,4.163,6.271c-0.98,4.827-2.38,9.504-4.694,13.925c-2.449,4.677-5.738,7.554-11.082,6.601
	c-5.979,0.904-9.489-1.825-12.019-6.766C35.201,44.178,33.901,38.304,32.818,32.325z M60.56,62.517
	c-2.803,3.648-6.489,5.446-11.56,5.47c-3.833-0.258-7.408-1.909-10.062-5.473c-1.057-1.42-0.896-2.801-0.246-4.163
	c1-2.092,2.201-0.296,3.223,0.04c5.183,1.704,10.328,1.565,15.508,0.006c0.994-0.299,2.049-2.255,3.138-0.001
	C61.245,59.81,61.655,61.092,60.56,62.517z M85.237,89.462c-0.317,1.872-1.323,2.376-2.849,2.807
	c-21.757,6.15-43.503,6.077-65.272,0.036c-4.822-1.338-1.957-5.148-2.737-7.384c0.432-12.227,7.534-19.963,19.451-21.968
	c1.935-0.326,2.217,0.865,3.02,1.742c7.672,8.385,18.124,8.469,25.661-0.046c1.502-1.698,2.651-2.035,4.539-1.157
	c1.935,0.899,3.957,1.614,5.898,2.5C83.484,70.798,87.181,78.005,85.237,89.462z"
        />
      </svg>
    );
  }
);

Avatar08.displayName = "Avatar08";

export default Avatar08;
