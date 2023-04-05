const autoCompleteRef = useRef(null);

useEffect(() => {
  const autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    // {
    //   types: ["(cities)"]
    // }
  );
}, []);

autoComplete.addListener("place_changed", () => {
  const place = autoComplete.getPlace();
});