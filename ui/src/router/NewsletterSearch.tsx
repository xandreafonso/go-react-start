import { Link } from "react-router-dom";

export function NewsletterSearchPage() {
  return <>
    <table>
      <thead>
        <tr>
          <th>Newsletters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link to="/newsletters/1/edit">Newsletter 1</Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="/newsletters/2/edit">Newsletter 2</Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="/newsletters/3/edit">Newsletter 3</Link>
          </td>
        </tr>
      </tbody>
    </table>
  </>
}