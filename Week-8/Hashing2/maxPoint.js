function maxPointsOnLine(points) {
  if (points.length <= 2) return points.length;

  let maxPoints = 0;

  for (let i = 0; i < points.length; i++) {
    const slopes = {};
    let duplicatePoints = 1;
    let verticalPoints = 0;

    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
          duplicatePoints++;
        } else if (points[i][0] === points[j][0]) {
          verticalPoints++;
        } else {
          const slope = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
          const intercept = points[i][1] - slope * points[i][0];
          const key = `${slope},${intercept}`;

          slopes[key] = (slopes[key] || 0) + 1;
        }
      }
    }

    let currentMax = verticalPoints;
    for (const slope in slopes) {
      currentMax = Math.max(currentMax, slopes[slope]);
    }

    maxPoints = Math.max(maxPoints, currentMax + duplicatePoints);
  }

  return maxPoints;
}

// Example usage:
const points = [[1, 1], [2, 2], [3, 3], [4, 4], [1, 2], [2, 3], [3, 4]];
console.log(maxPointsOnLine(points));