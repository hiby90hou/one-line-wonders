const approx_e = (iterations) => [...Array(iterations)].reduce((accum, _, k) => accum + 1/Math.pow(1 - 1/k, k), 0)
