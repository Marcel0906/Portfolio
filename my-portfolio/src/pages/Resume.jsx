const Resume = () => {
  return (
    <div className='Resume'><br></br><h1>Lebenslauf</h1>
    <table className="resume-table">
    <thead>
      <tr>
        <th scope="col">Erfahrung</th>
        <th scope="col">Schulbildung</th>
        <th scope="col">Skills</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td rowSpan="1" align="right" valign="bottom">45</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td rowSpan="1" align="right" valign="bottom">45</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td rowSpan="1" align="right" valign="bottom">45</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td rowSpan="1" align="right" valign="bottom">45</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td rowSpan="1" align="right" valign="bottom">45</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td rowSpan="1" align="right" valign="bottom">45</td>
      </tr>
      <tr>
        <td>Total</td>
        <td></td>
        <td rowSpan="1" align="right" valign="bottom">210</td>
      </tr>
    </tbody>
  </table>
  </div>
  );
}

export default Resume 