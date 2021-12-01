// Helper function for standardizing the object passed to Head component
export function getHeadProps(storyName, storyMeta) {
  const title = storyMeta?.title && storyMeta.title !== '' ? storyMeta?.title : storyName;
  let headProps = {
    title: title
  };
  if (storyMeta) {
    //maybe do keywords as well
    storyMeta?.description !== '' && (headProps.description = storyMeta?.description);
    storyMeta?.og_title !== '' && (headProps.og_title = storyMeta?.og_title);
    storyMeta?.og_description !== '' && (headProps.og_description = storyMeta?.og_description);
    storyMeta?.og_image !== '' && (headProps.og_image = storyMeta?.og_image);
  }

  return headProps;
}

//helper function for downloading things with an href (images)
export function saveAs(blob, fileName) {
  var elem = window.document.createElement('a');
  elem.href = blob;
  elem.download = fileName;
  elem.style = 'display:none;';
  (document.body || document.documentElement).appendChild(elem);
  if (typeof elem.click === 'function') {
    elem.click();
  } else {
    elem.target = '_blank';
    elem.dispatchEvent(
      new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      })
    );
  }
  URL.revokeObjectURL(elem.href);
  elem.remove();
}
