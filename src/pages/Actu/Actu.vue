<!-- Login.vue -->
<style scoped>
@import "actu.css";
</style>
<template>
  <nav class="navbar navbar-lg navbar-expand-lg navbar-dark bg-info">
    <div class="container">
      <a class="navbar-brand" href="index.html">Robust.</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Overview</a>
          </li>
          <li class="nav-item dropdown active">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="pages-landing.html">Landing</a>
              <a class="dropdown-item" href="pages-dashboard.html">Dashboard</a>
              <a class="dropdown-item" href="pages-general.html">General</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Components
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="components-bootstrap.html"
                >Bootstrap</a
              >
              <a class="dropdown-item" href="components-robust.html">Robust</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Docs
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="getting-started.html"
                >Introduction</a
              >
              <a class="dropdown-item" href="getting-started.html#quick-start"
                >Quick start</a
              >
              <a class="dropdown-item" href="getting-started.html#build-tools"
                >Build tools</a
              >
              <a class="dropdown-item" href="getting-started.html#contents"
                >Contents</a
              >
              <a class="dropdown-item" href="getting-started.html#changelog"
                >Changelog</a
              >
            </div>
          </li>
        </ul>
        <div class="dropdown">
          <button
            class="btn btn-outline-white dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            My account
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">Analytics</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Settings & Privacy</a>
            <a class="dropdown-item" href="#">Help</a>
            <a class="dropdown-item" href="#">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <main class="main" role="main">
    <div class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="h6 card-title">
                  Followers <small>· <a href="#">View all</a></small>
                </h5>
                <div class="media mb-2">
                  <img
                    alt=""
                    src="https://robust.bootlab.io/img/avatars/1.jpg"
                    width="48"
                    height="48"
                    class="rounded-circle mr-3"
                  />
                  <div class="media-body">
                    <h6 class="h6 mb-0">Elaine Johnson</h6>
                    <span class="text-muted">Growth Hacker</span>
                  </div>
                </div>
                <div class="media mb-2">
                  <img
                    alt=""
                    src="https://robust.bootlab.io/img/avatars/2.jpg"
                    width="48"
                    height="48"
                    class="rounded-circle mr-3"
                  />
                  <div class="media-body">
                    <h6 class="h6 mb-0">Patrick Langston</h6>
                    <span class="text-muted">Developer</span>
                  </div>
                </div>
                <div class="media mb-2">
                  <img
                    alt=""
                    src="https://robust.bootlab.io/img/avatars/3.jpg"
                    width="48"
                    height="48"
                    class="rounded-circle mr-3"
                  />
                  <div class="media-body">
                    <h6 class="h6 mb-0">Amber Witt</h6>
                    <span class="text-muted">UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card -->

            <div class="card mb-3">
              <div class="card-body">
                <h5 class="h6 card-title">Recent photos</h5>
                <div class="row no-gutters">
                  <div class="col-6">
                    <div class="pr-1 pb-2">
                      <img
                        src="https://robust.bootlab.io/img/gallery/4.jpg"
                        class="img-fluid"
                        alt=""
                        data-action="zoom"
                      />
                    </div>
                    <div class="pr-1 pb-2">
                      <img
                        src="https://robust.bootlab.io/img/gallery/2.jpg"
                        class="img-fluid"
                        alt=""
                        data-action="zoom"
                      />
                    </div>
                    <div class="pr-1 pb-2">
                      <img
                        src="https://robust.bootlab.io/img/gallery/7.jpg"
                        class="img-fluid"
                        alt=""
                        data-action="zoom"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="pl-1 pb-2">
                      <img
                        src="https://robust.bootlab.io/img/gallery/5.jpg"
                        class="img-fluid"
                        alt=""
                        data-action="zoom"
                      />
                    </div>
                    <div class="pl-1 pb-2">
                      <img
                        src="https://robust.bootlab.io/img/gallery/3.jpg"
                        class="img-fluid"
                        alt=""
                        data-action="zoom"
                      />
                    </div>
                    <div class="pl-1 pb-2">
                      <img
                        src="https://robust.bootlab.io/img/gallery/6.jpg"
                        class="img-fluid"
                        alt=""
                        data-action="zoom"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card -->
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="h6 card-title">Advertisement</h5>
                <img
                  src="https://robust.bootlab.io/img/gallery/3.jpg"
                  class="img-fluid"
                  alt=""
                />
                <p class="mb-0 mt-2">
                  Etiam rhoncus. <a href="#">Maecenas tempus</a>, tellus eget
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum.
                </p>
              </div>
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col-md-4 -->

          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <form>
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="How are you today?"
                      name="message"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-info" type="button">
                        <i class="fas fa-camera"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- /.card -->

            <div class="card mb-3">
              <div class="card-body">
                <div class="media">
                  <img
                    alt=""
                    src="https://robust.bootlab.io/img/avatars/1.jpg"
                    width="48"
                    height="48"
                    class="rounded-circle mr-3"
                  />
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <h6 class="mt-0">Elaine Johnson</h6>
                      <time
                        class="text-muted text-sm"
                        datetime="2021-01-01 00:00"
                        >10 minutes ago</time
                      >
                    </div>
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Maecenas malesuada. Praesent congue
                    erat at massa. Sed cursus turpis vitae tortor. Donec posuere
                    vulputate arcu. Phasellus accumsan cursus velit.
                    Pellentesque posuere. Praesent turpis.

                    <img
                      src="https://robust.bootlab.io/img/photos/7.jpg"
                      class="img-fluid my-2"
                      alt=""
                      data-action="zoom"
                    />

                    <div class="media mt-3">
                      <img
                        alt=""
                        src="https://robust.bootlab.io/img/avatars/2.jpg"
                        width="48"
                        height="48"
                        class="rounded-circle mr-3"
                      />
                      <div class="media-body">
                        <h6 class="mt-0">Patrick Langston</h6>
                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                        eget, imperdiet nec, imperdiet iaculis, ipsum.
                      </div>
                    </div>
                    <div class="media mt-3">
                      <img
                        alt=""
                        src="https://robust.bootlab.io/img/avatars/3.jpg"
                        width="48"
                        height="48"
                        class="rounded-circle mr-3"
                      />
                      <div class="media-body">
                        <h6 class="mt-0">Amber Witt</h6>
                        Sed aliquam ultrices mauris. Integer ante arcu, accumsan
                        a, consectetuer eget, posuere ut, mauris. Praesent
                        adipiscing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-white">
                <div>
                  <a href="#" class="btn btn-sm btn-outline-secondary"
                    >Comment</a
                  >
                  <a href="#" class="btn btn-sm btn-outline-secondary"
                    ><i class="fas fa-thumbs-up"></i
                  ></a>
                </div>
                <div class="text-small">
                  <ul class="list-inline mb-1">
                    <li class="list-inline-item">
                      <i class="far fa-thumbs-up"></i> 14
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card mb-3">
              <div class="card-body">
                <div class="media">
                  <img
                    alt=""
                    src="https://robust.bootlab.io/img/avatars/2.jpg"
                    width="48"
                    height="48"
                    class="rounded-circle mr-3"
                  />
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <h6 class="mt-0">Patrick Langston</h6>
                      <time
                        class="text-muted text-sm"
                        datetime="2021-01-01 00:00"
                        >16 minutes ago</time
                      >
                    </div>
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Maecenas malesuada. Praesent congue
                    erat at massa. Sed cursus turpis vitae tortor. Donec posuere
                    vulputate arcu. Phasellus accumsan cursus velit. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Sed aliquam, nisi quis porttitor
                    congue, elit erat euismod orci.
                  </div>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-white">
                <div>
                  <a href="#" class="btn btn-sm btn-outline-secondary"
                    >Comment</a
                  >
                  <a href="#" class="btn btn-sm btn-outline-secondary"
                    ><i class="far fa-thumbs-up"></i
                  ></a>
                </div>
                <div class="text-small">
                  <ul class="list-inline mb-1">
                    <li class="list-inline-item">
                      <i class="far fa-thumbs-up"></i> 2
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card mb-3">
              <div class="card-body">
                <div class="media">
                  <img
                    alt=""
                    src="https://robust.bootlab.io/img/avatars/3.jpg"
                    width="48"
                    height="48"
                    class="rounded-circle mr-3"
                  />
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <h6 class="mt-0">Amber Witt</h6>
                      <time
                        class="text-muted text-sm"
                        datetime="2021-01-01 00:00"
                        >45 minutes ago</time
                      >
                    </div>
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Maecenas malesuada. Praesent congue
                    erat at massa. Sed cursus turpis vitae tortor. Donec posuere
                    vulputate arcu. Phasellus accumsan cursus velit. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Sed aliquam, nisi quis porttitor
                    congue, elit erat euismod orci.

                    <div class="media mt-3">
                      <img
                        alt=""
                        src="https://robust.bootlab.io/img/avatars/1.jpg"
                        width="48"
                        height="48"
                        class="rounded-circle mr-3"
                      />
                      <div class="media-body">
                        <h6 class="mt-0">Elaine Johnson</h6>
                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                        eget, imperdiet nec, imperdiet iaculis, ipsum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-white">
                <div>
                  <a href="#" class="btn btn-sm btn-outline-secondary"
                    >Comment</a
                  >
                  <a href="#" class="btn btn-sm btn-outline-secondary"
                    ><i class="far fa-thumbs-up"></i
                  ></a>
                </div>
                <div class="text-small">
                  <ul class="list-inline mb-1">
                    <li class="list-inline-item">
                      <i class="far fa-thumbs-up"></i> 6
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="text-center mt-4">
              <button class="btn btn-outline-secondary">Load more</button>
            </div>
          </div>
          <!-- /.col-md-8 -->
        </div>
      </div>
    </div>
  </main>

  <footer role="contentinfo" class="py-3 lh-1 bg-white text-center">
    <div class="container">
      <div class="row">
        <div class="col">
          <small class="text-muted"
            >&copy; 2021 - <a href="index.html">Robust UI Kit</a>.</small
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
