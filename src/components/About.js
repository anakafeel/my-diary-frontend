import React from "react";

const About = () => {
  return (
    <div>
      <div class="row login" style={{ padding: "2rem", minHeight: "400px" }}>
        <div class="col-4">
          <nav
            id="navbar-example3"
            class="h-100 flex-column align-items-stretch pe-4 border-end"
          >
            <nav class="nav nav-pills flex-column">
              <a class="nav-link" href="#item-1">
                Item 1
              </a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-1-1">
                  Item 1-1
                </a>
                <a class="nav-link ms-3 my-1" href="#item-1-2">
                  Item 1-2
                </a>
              </nav>
              <a class="nav-link" href="#item-2">
                Item 2
              </a>
              <a class="nav-link" href="#item-3">
                Item 3
              </a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-3-1">
                  Item 3-1
                </a>
                <a class="nav-link ms-3 my-1" href="#item-3-2">
                  Item 3-2
                </a>
              </nav>
            </nav>
          </nav>
        </div>

        <div class="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            class="scrollspy-example-2"
            tabindex="0"
          >
            <div id="item-1">
              <h4>Item 1</h4>
              <p>...</p>
            </div>
            <div id="item-1-1">
              <h5>Item 1-1</h5>
              <p>...</p>
            </div>
            <div id="item-1-2">
              <h5>Item 1-2</h5>
              <p>...</p>
            </div>
            <div id="item-2">
              <h4>Item 2</h4>
              <p>...</p>
            </div>
            <div id="item-3">
              <h4>Item 3</h4>
              <p>...</p>
            </div>
            <div id="item-3-1">
              <h5>Item 3-1</h5>
              <p>...</p>
            </div>
            <div id="item-3-2">
              <h5>Item 3-2</h5>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
