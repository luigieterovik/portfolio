function getCoordinates(elementRef) {
  let coordinates = null;

  if (elementRef.current)
    return (coordinates = elementRef.current.getBoundingClientRect());
}

export default getCoordinates;
