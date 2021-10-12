<section id="my-cloud">
  <header>
    <div>
      <i className="fas fa-cloud"></i>
    </div>
    <i className="las la-ellipsis-v"></i>
  </header>
  <h4>My Cloud</h4>
  <footer>
    <div className="stat">
      <div>35GB</div>
      <div>50GB</div>
    </div>
    <div className="chart">
      <div></div>
      <div></div>
    </div>
  </footer>
</section>
<section id="dropbox">
  <header>
    <div>
      <i className="fab fa-dropbox"></i>
    </div>
    <i className="las la-ellipsis-v"></i>
  </header>
  <h4>Dropbox</h4>
  <footer>
    <div className="stat">
      <div>29GB</div>
      <div>120GB</div>
    </div>
    <div className="chart">
      <div></div>
      <div></div>
    </div>
  </footer>
</section>
<section id="google-drive">
  <header>
    <div>
      <i className="fab fa-google-drive"></i>
    </div>
    <i className="las la-ellipsis-v"></i>
  </header>
  <h4>Google Drive</h4>
  <footer>
    <div className="stat">
      <div>80GB</div>
      <div>100GB</div>
    </div>
    <div className="chart">
      <div></div>
      <div></div>
    </div>
  </footer>
</section>


<div className="storage">
  <section className="details">
    <header>
      <h4>Storage details</h4>
      <button>See More</button>
    </header>
    <footer>
      <div className="chart">
        <canvas id="chart" width="180" height="180"></canvas>
      </div>
      <div className="text">
        <div id="media">
          <h6><span></span>Media</h6>
          <p>16.812 files</p>
        </div>
        <div id="document">
          <h6><span></span>Document</h6>
          <p>25.153 files</p>
        </div>
        <div id="apps">
          <h6><span></span>Apps</h6>
          <p>800 files</p>
        </div>
      </div>
    </footer>
  </section>
  <section className="history">
    <header>
      <h4>Recent history</h4>
      <button>See More</button>
    </header>
    <footer>
      <table>
        <thead>
        <tr>
          <th>File name</th>
          <th>Date</th>
          <th>Files</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div>
              <i className="fas fa-file-word"></i>
            </div>
            <span>Project bref.docx</span>
          </td>
          <td>06-02-2021</td>
          <td>1,5MB</td>
        </tr>
        <tr>
          <td>
            <div>
              <i className="fas fa-file-powerpoint"></i>
            </div>
            <span>Style guide.pptx</span>
          </td>
          <td>14-02-2021</td>
          <td>8,4MB</td>
        </tr>
        <tr>
          <td>
            <div>
              <i className="fas fa-music"></i>
            </div>
            <span>Record 119.mp3</span>
          </td>
          <td>18-02-2021</td>
          <td>4,6MB</td>
        </tr>
        </tbody>
      </table>
    </footer>
  </section>
</div>
