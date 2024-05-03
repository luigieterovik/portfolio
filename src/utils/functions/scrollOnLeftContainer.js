function scrollOnLeftContainer(e, backgroundWrapperRef) {
  const deltaY = e.deltaY;
  if (backgroundWrapperRef.current) {
    backgroundWrapperRef.current.scrollTo({
      top: backgroundWrapperRef.current.scrollTop + deltaY,
      behavior: "smooth",
    });
  }
}

export default scrollOnLeftContainer
