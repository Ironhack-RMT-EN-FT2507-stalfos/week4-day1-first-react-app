function Technologies() {

  let sectionStyles = {
    backgroundColor: "darkgreen",
    padding: "20px",
    margin: "10px",
    borderRadius: "10px"
  }


  return (
    <section id="technologies" style={sectionStyles}>
      <h3 className="title">Learned Technologies</h3>

      <ul style={{color: "lightgreen"}}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>DOM & DOM Manipulation</li>
        <li>Classes & OOP</li>
        <li>TDD & Testing</li>
      </ul>

    </section>
  )

}

export default Technologies