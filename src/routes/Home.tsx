import { useEffect, useRef, useState } from 'react';
import '../styles/homeStyle.css'; // Asegúrate de que tu archivo CSS esté en la misma ruta


export default function Home() {

    
    return (
        <div className='home'>
            <nav>
                <div className="container">
                    <div className='logo-bw'>
                        <img className='logo' src="src\img\logo-birdwatch.svg" alt="" />
                        <h2 className="log">
                            BirdWatch
                        </h2>
                    </div>

                    <div className="search-bar">
                        <i className="uil uil-search">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>


                        </i>
                        <input type="search" placeholder="Busca aves y vuela por el mundo." />
                    </div>
                    <div className="create">
                        <label className="btn btn-primary" htmlFor="create-post">Crear</label>
                        <div className="profile-photo">
                            <img src="src\components\homaPage\images\foto-eriko.jpg" alt="Perfil" />
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div className="container">


                    <div className="left">
                        <a className="profile">
                            <div className="profile-photo">
                                <img src="src\components\homaPage\images\foto-eriko.jpg" alt="Perfil" />
                            </div>
                            <div className="handle">
                                <h4>Eriko</h4>
                                <p className="text-muted">
                                    @eriko_vc
                                </p>
                            </div>
                        </a>

                        <div className="sidebar">
                            <a className="menu-item active">
                                <span><i className="uil uil-home"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                </i></span>
                                <h3>Inicio</h3>
                            </a>

                            <a className="menu-item">
                                <span><i className="uil uil-compass"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                </svg>
                                </i>
                                </span>
                                <h3>Explorar</h3>
                            </a>

                            <a className="menu-item" id="notifications">
                                <span><i className="uil uil-bell"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                                    <small className="notification-count">3</small></i>
                                </span>
                                <h3>Notificaciones</h3>

                                <div className="notification-popup">
                                    <div>
                                        <div className="profile-photo">
                                            <img src="src\components\homaPage\images\profile-3.jpg" alt="Perfil" />
                                        </div>
                                        <div className="notification-body">
                                            <b>Regino el PRO</b> aceptó tu solicitud de amistad
                                            <small className="text-muted"> HACE 2 DÍAS</small>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="profile-photo">
                                            <img src="src\components\homaPage\images\profile-2.jpg" alt="" />
                                        </div>
                                        <div className="notification-body">
                                            <b>elROYYY</b> comentó en tu publicación
                                            <small className="text-muted"> HACE 4 HORAS</small>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="profile-photo">
                                            <img src="src\components\homaPage\images\profile-4.jpg" alt="" />
                                        </div>
                                        <div className="notification-body">
                                            <b>ALEJINTO</b> le gustó tu publicación
                                            <small className="text-muted"> HACE 20 MINUTOS</small>
                                        </div>
                                    </div>
                                </div>

                            </a>

                            <a className="menu-item" id="messages-notifictions">
                                <span><i className="uil uil-message"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                                    <small className="notification-count">8</small></i>
                                </span>
                                <h3>Mensajes</h3>
                            </a>

                            <a className="menu-item">
                                <span><i className="uil uil-bookmark"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                                </i>
                                </span>
                                <h3>Guardar</h3>
                            </a>

                            <a className="menu-item">
                                <span><i className="uil uil-chart-line"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                                </svg>
                                </i>
                                </span>
                                <h3>Datos</h3>
                            </a>

                            <a className="menu-item" id='theme'>
                                <span><i className="uil uil-palette"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                                </svg>
                                </i>
                                </span>
                                <h3>Temas</h3>
                            </a>

                            <a className="menu-item">
                                <span><i className="uil uil-setting"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                </i>
                                </span>
                                <h3>Ajustes</h3>
                            </a>
                        </div>

                        <label htmlFor="create-post" className="btn btn-primary">PUBLICAR</label>

                    </div>

                    <div className="customize-theme">
                        <div className="card">
                            <h2>Customiza a tu gusto</h2>
                            <p className="text-muted">Maneja tu tamaño de funete, color, y fondo</p>


                            <div className="font-size">
                                <h4>Tamaños de fuente</h4>
                                <div>
                                    <h6>Aa</h6>
                                    <div className="choose-size">
                                        <span className="font-size-1 active"></span>
                                        <span className="font-size-2"></span>
                                        <span className="font-size-3"></span>
                                        <span className="font-size-4"></span>
                                        <span className="font-size-5"></span>
                                    </div>
                                    <h3>Aa</h3>
                                </div>
                            </div>


                            <div className="color">
                                <h4>Color</h4>
                                <div className="choose-color">
                                    <span className="color-1 active"></span>
                                    <span className="color-2"></span>
                                    <span className="color-3"></span>
                                    <span className="color-4"></span>
                                    <span className="color-5"></span>
                                </div>
                            </div>


                            <div className="background">
                                <h4>Background</h4>
                                <div className="choose-bg">
                                    <div className="bg-1 active">
                                        <span></span>
                                        <h5 className="bg-1">Light</h5>
                                    </div>
                                    <div className="bg-2">
                                        <span></span>
                                        <h5>Dim</h5>
                                    </div>

                                    <div className="bg-3">
                                        <span></span>
                                        <h5>Light Out</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>










                    <div className="middle">

                        <form className="create-post">
                            <div className="profile-photo">
                                <img src="src\components\homaPage\images\foto-eriko.jpg" />
                            </div>
                            <input type="text" placeholder="¿Qué has avistado de nuevo, Eriko?" id="create-post" />
                            <input type="submit" value="Post" className="btn btn-primary" />
                        </form>


                        <div className="feeds">
                            <div className="feed">
                                <div className="head">
                                    <div className="user">
                                        <div className="profile-photo">
                                            <img src="src\components\homaPage\images\profile-13.jpg" />
                                        </div>
                                        <div className="info">
                                            <h3>Jhon Niño</h3>
                                            <small>UNAC, hace 2 semanas</small>
                                        </div>
                                        <span className="edit">
                                            <i className="uil uil-ellipsis-h"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="photo">
                                    <img src="src\components\homaPage\images\ave1.jpeg" />
                                </div>
                                <div className="action-button">
                                    <div className="interaction-button">
                                        <span><i className="uil uil-heart"></i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        </span>
                                        <span><i className="uil uil-comment-alt"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        </i></span>
                                        <span><i className="uil uil-share"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                        </i></span>
                                    </div>
                                    <div className="bookmark">
                                        <span>
                                            <i className="uil uil-bookmark"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                            </svg>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="liked-by">
                                    <span><img src="src\components\homaPage\images\profile-10.jpg" /></span>
                                    <span><img src="src\components\homaPage\images\profile-11.jpg" /></span>
                                    <span><img src="src\components\homaPage\images\profile-12.jpg" /></span>
                                    <p>Le gustó a <b>ElCONDOR345</b> y a <b>2.374</b> más </p>
                                </div>

                                <div className="caption">
                                    <p> <b>Jhon Niño</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
                                        culpa, suscipit deleniti delectus tempore excepturi officiis, nulla esse eum quis ea
                                        voluptate repellat veritatis libero eligendi amet sit qui laboriosam!
                                        <span className="hash-tag">#avesbonitas #avistamiento #guacamaya</span>
                                    </p>
                                </div>
                                <div className="comments text-muted"> Ver los 277 comentarios</div>
                            </div>

                            <div className="feed">
                                <div className="head">
                                    <div className="user">
                                        <div className="profile-photo">
                                            <img src="src\components\homaPage\images\profile-10.jpg" />
                                        </div>
                                        <div className="info">
                                            <h3>Roysman Muñoz</h3>
                                            <small>Cerro de las 3 cruces, hace 4 meses</small>
                                        </div>
                                        <span className="edit">
                                            <i className="uil uil-ellipsis-h"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="photo">
                                    <img src="src\components\homaPage\images\ave3.jpeg" />
                                </div>
                                <div className="action-button">
                                    <div className="interaction-button">
                                        <span><i className="uil uil-heart"></i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        </span>
                                        <span><i className="uil uil-comment-alt"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        </i></span>
                                        <span><i className="uil uil-share"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                        </i></span>
                                    </div>
                                    <div className="bookmark">
                                        <span>
                                            <i className="uil uil-bookmark"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                            </svg>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="liked-by">
                                    <span><img src="src\components\homaPage\images\profile-10.jpg" /></span>
                                    <span><img src="src\components\homaPage\images\profile-11.jpg" /></span>
                                    <span><img src="src\components\homaPage\images\profile-12.jpg" /></span>
                                    <p>Le gustó a <b>Jhon Niño</b> y a <b>98.354</b> más </p>
                                </div>

                                <div className="caption">
                                    <p> <b>Roysman Muñoz</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
                                        culpa, suscipit deleniti delectus tempore excepturi officiis, nulla esse eum quis ea
                                        voluptate repellat veritatis libero eligendi amet sit qui laboriosam!
                                        <span className="hash-tag">#avesbonitas #avistamiento #guacamaya</span>
                                    </p>
                                </div>
                                <div className="comments text-muted"> Ver los 277 comentarios</div>
                            </div>

                            <div className="feed">
                                <div className="head">
                                    <div className="user">
                                        <div className="profile-photo">
                                            <img src="src\components\homaPage\images\profile-8.jpg" />
                                        </div>
                                        <div className="info">
                                            <h3>Regino Galindo</h3>
                                            <small>UNAC, hace 12 horas</small>
                                        </div>
                                        <span className="edit">
                                            <i className="uil uil-ellipsis-h"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="photo">
                                    <img src="src\components\homaPage\images\ave2.jpeg" />
                                </div>
                                <div className="action-button">
                                    <div className="interaction-button">
                                        <span><i className="uil uil-heart"></i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        </span>
                                        <span><i className="uil uil-comment-alt"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        </i></span>
                                        <span><i className="uil uil-share"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                        </i></span>
                                    </div>
                                    <div className="bookmark">
                                        <span>
                                            <i className="uil uil-bookmark"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                            </svg>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="liked-by">
                                    <span><img src="src\components\homaPage\images\profile-10.jpg" /></span>
                                    <span><img src="src\components\homaPage\images\profile-11.jpg" /></span>
                                    <span><img src="src\components\homaPage\images\profile-12.jpg" /></span>
                                    <p>Le gustó a <b>ERIKO</b> y a <b>447</b> más </p>
                                </div>

                                <div className="caption">
                                    <p> <b>Regino Galindo</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
                                        culpa, suscipit deleniti delectus tempore excepturi officiis, nulla esse eum quis ea
                                        voluptate repellat veritatis libero eligendi amet sit qui laboriosam!
                                        <span className="hash-tag">#avesbonitas #avistamiento #guacamaya</span>
                                    </p>
                                </div>
                                <div className="comments text-muted"> Ver los 277 comentarios</div>
                            </div>
                        </div>
                    </div>


                    <div className="right">
                        <div className="noticias">
                            <h3>Noticias</h3>
                            <div className="noticia">
                                <div className="content">
                                    <div className="photo">
                                        <img src="src\components\homaPage\images\noticia1.png" />
                                    </div>
                                    <div className="titulo">
                                        <p><b>Nueva especie</b> encontrada en el campus universitario de la UNAC</p>
                                    </div>
                                </div>
                            </div>
                            <div className="noticia">
                                <div className="content">
                                    <div className="photo">
                                        <img src="src\components\homaPage\images\GUACAMAYAS-ROJAS.jpg" />
                                    </div>
                                    <div className="titulo">
                                        <p>Ya empezó la <b>emigración de guacamayas rojas</b> en el sur colombiano</p>
                                    </div>
                                </div>
                            </div>
                            <div className="noticia">
                                <div className="content">
                                    <div className="photo">
                                        <img src="src\components\homaPage\images\colibri.jpeg" />
                                    </div>
                                    <div className="titulo">
                                        <p>La población de <b>colibrís</b> disminuye un 15% desde el 2012 en el Valle del Cocora</p>
                                    </div>
                                </div>
                            </div>
                            <small className="watch-more">Ver más...</small>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}
