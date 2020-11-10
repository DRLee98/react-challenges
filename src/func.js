const pxFormatNumber = (n) =>
  (n && parseInt(n.includes("px") ? n.slice(0, n.length - 2) : n)) || 0;

export const handleClick = (e) => {
  const {
    target: {
      className,
      parentElement: {
        parentElement: { children },
      },
    },
  } = e;
  const {
    firstChild: { clientWidth },
    offsetWidth: targetWidth,
    offsetLeft,
    offsetParent: { offsetWidth },
  } = children[1];
  const formatNum = pxFormatNumber(children[1].style.left);
  if (className.includes("left") && formatNum < 0) {
    children[1].style.left = `${formatNum + clientWidth}px`;
  } else if (
    className.includes("right") &&
    targetWidth > Math.abs(offsetLeft) + offsetWidth
  ) {
    children[1].style.left = `${formatNum - clientWidth}px`;
  }
};

export const handleBack = () => {
  history.back();
};
