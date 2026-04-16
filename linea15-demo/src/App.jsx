import React from "react";
var useState = React.useState, useEffect = React.useEffect, useMemo = React.useMemo;
var h = React.createElement;

var T = {bg:"#F5F0EB",sf:"#FFFFFF",sa:"#F0E8E0",bd:"#E0D5C8",ac:"#E87722",ah:"#F59E0B",as:"rgba(232,119,34,.08)",dn:"#DC2626",ds:"rgba(220,38,38,.08)",wn:"#D97706",ws:"rgba(217,119,6,.08)",sc:"#2E8B57",ss:"rgba(46,139,87,.08)",inf:"#1A7AB5",tx:"#2D2A26",ts:"#6B6560",td:"#9C9590",wh:"#FFFFFF"};
var CTRL_ST = {pendiente:{l:"Pendiente",c:T.wn,i:"⏳"},en_progreso:{l:"En Progreso",c:T.inf,i:"🔄"},implementado:{l:"Implementado",c:T.ac,i:"✅"},verificado:{l:"Verificado",c:T.sc,i:"🛡️"}};
var EV_ST = {en_revision:{l:"En revisión",c:T.wn,i:"⏳"},aprobada:{l:"Aprobada",c:T.sc,i:"✓"},rechazada:{l:"Rechazada",c:T.dn,i:"✕"}};
var EV_TYPES = ["Captura de pantalla","Documento / Política","Log del sistema","Reporte de auditoría","Acta de reunión","Certificación","Resultado de prueba","Correo electrónico","Otro"];

var _c = Date.now();
function uid(){return "id"+_c++}
function today(){return new Date().toISOString().split("T")[0]}

  function makeBaseData(){
    var controls=[
      {id:uid(),code:"CT-001",causaBase:"Configuraciones Inseguras",causasAsociadas:"Inadecuada Gestión de Métodos Criptográficos que se ajuste a la necesidad de las comunicaciones. \n\nCifrado inseguro en las aplicaciones generados por configuraciones predeterminadas.\n\nUso de algoritmo débiles o inseguros.\n\nAplicar configuraciones por defecto en el Software y Hardware",controlBase:"1. Aplicar cifrado en tránsito y reposo, según naturaleza de la información. (TLS 1.2/1.3 - AES-256)\n\n2. Aplicar políticas de rotación de claves y certificados.\n\n3. Deshabilitar algoritmos obsoletos (MD5, SHA-1, RC4).\n\n4. Activar cifrado en reposo y en tránsito en todos los servicios (S3, Blob Storage, etc.).\n\n5. Validación con el Área de Base de Datos del cifrado aplicado a las BD utilizadas por el proyecto.\n\n6.  En caso de incluir datos sensibles, evidenciar el ofuscamiento a nivel de aplicati",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"10.1.1 Política sobre el uso de controles criptográficos\n18.1.3 Protección de registros \nA.10.1.2 Gestión de llaves",iso27002:"5.17 Autenticación information\n7.14 Secure disposal or re-use of equipment\n8.1 Information access restriction\n8.11 Data masking\n8.12 Data leakage prevention\n8.21 Security of network services.\n8.24 Use of cryptography",circular:"2.3.4.11.2.Implementar mecanismos de cifrado fuerte de extremo a extremo para el envío y recepción de información confidencial de las operaciones realizadas, tal como: clave, número de cuenta, número de tarjeta, etc. Esta información, en ningún caso puede ser conocida por los proveedores de redes y ",sfc:"3.10. Mantener cifrada la información clasificada como confidencial en tránsito o en reposo, usando estándares y algoritmos reconocidos internacionalmente que brinden al menos la seguridad ofrecida por AES, RSA o 3DES.\n3.14. Contar con canales de comunicación con el proveedor de servicios en la nube",otras:"Especificar métodos de cifrado de contraseñas y algoritmos de cifrado soportados."}},
      {id:uid(),code:"CT-002",causaBase:"Uso Inadecuado de Atribuciones",causasAsociadas:"Falta de monitoreo de las cuentas de usuarios privilegiados\nFalta de monitoreo de las modificaciones y/o registros sospechosos de sobre plataformas tecnológicas.\nFalta de visibilidad y gestión de eventos de seguridad. \nIncumplimiento en el procedimiento de gestión de administración de accesos\nAcceso",controlBase:"1. Implementar las fuentes de datos (app logs, firewall logs, IDS logs, entre otros.) para un análisis granular y de alertas serán monitoreadas a través de Azure Monitor, Azure security Center y CyberArk.\n\n2. Crear e implementar una Matriz de Roles y Perfiles que contemple de manera integral todos los módulos y submódulos de los aplicativos de la compañía, asegurando que cada usuario cuente únicamente con los accesos necesarios según sus funciones.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.12.4.1 Registro de eventos \nA.16.1.2 Reporte de eventos de \nseguridad de la información \nA.16.1.4 Evaluación de eventos de \nseguridad de la información y \ndecisiones sobre ellos.",iso27002:"5.22 Monitoring, review and change management of suppler services.\n5.24 Information security incident management planning and preparation.\n5.25 Assessment and decision on information security events.\n5.28 Collection of evidence.\n6.8 Information security event reporting.\n8.15 Logging",circular:".3.3.1.12.  Establecer procedimientos para el bloqueo de canales o de instrumentos para la realización de operaciones, cuando existan situaciones o hechos que lo ameriten o después de un número de intentos de accesos fallidos por  parte de un cliente, así como las medidas operativas y de seguridad p",sfc:"3.12. Monitorear los servicios contratados para detectar operaciones o cambios no deseados y/o adelantar las acciones preventivas o correctivas cuando se requiera.",otras:"Se debe asegurar la base de datos con una herramienta de seguridad y monitoreo de bases de datos (Ejemplo: GUARDIUM)."}},
      {id:uid(),code:"CT-003",causaBase:"Tecnología obsoleta (hardware/software)",causasAsociadas:"Infraestructura y aplicaciones obsoletas que perdieron la garantía de soporte por fabricante y que no suple las necesidades actuales del negocio.\nAplicaciones obsoletas y desactualizadas que generan incompatibilidad con las nuevas tecnologías. \nSistemas operativos que carecen de actualizaciones en s",controlBase:"1. Establecer controles para mantener la infraestructura y componentes actualizados",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"Aquisición, desarrollo y mantenimiento de Sistemas de Información",iso27002:"",circular:"2.3.5.6 Mantener documentada y actualizada, al menos, la siguiente información: parámetros de los sistemas donde operan las aplicaciones en producción, incluido el ambiente de comunicaciones; versión de los programas y aplicativos en uso; soportes de las pruebas realizadas a los sistemas de informac",sfc:"3.12 Monitorear los servicios contratados para detectar operaciones o cambios no deseados y/o adelantar las acciones preventivas o correctivas cuando se requiera.",otras:"3.12 Monitorear los servicios contratados para detectar operaciones o cambios no deseados y/o adelantar las acciones preventivas o correctivas cuando se requiera."}},
      {id:uid(),code:"CT-004",causaBase:"Configuraciones Inseguras",causasAsociadas:"Ausencia o inadecuada segmentación de la infraestructura tecnológica.\nAplicar configuraciones por defecto en el Software y Hardware\nHardware y Software con parámetros de fabrica habilitados",controlBase:"1. Se debe establecer una arquitectura de red en la nube donde se segmenten los diferentes servicios con el fin de garantizar segregación de los servicios y el acceso a los mismos para los diferentes actores (clientes, usuario interno, administradores)  y los difentes ambientes (producción, pruebas, desarrollo ).\n\n2. Gestionar junto con la Dirección de Seguridad Informática la arquitectura de red manteniendo el lineamiento Hub and Spoke y demás componentes que describan la respectiva segmentació",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.9.1.2 Acceso a redes y a servicios en red\nA.11.1.1 Perímetro de seguridad \nfísica \nA.12.1.4 Separación de los ambientes \nde desarrollo, pruebas, y \noperación",iso27002:"8.22 Segregation of networks",circular:".3.3.1.4. Dotar de seguridad la información confidencial de los clientes que se maneja en los equipos y redes de la entidad.",sfc:"7. Documentación:\n7.4. Los diagramas de red que permitan identificar la plataforma que soporta el servicio contratado en la Nube",otras:"Para autorizar el acceso y controlar los flujos de información desde y hacia las redes se debe contar con firewalls, dispositivos de seguridad, segmentación de redes, y detección de intrusos."}},
      {id:uid(),code:"CT-005",causaBase:"Configuraciones Inseguras",causasAsociadas:"Indebida protección de información en transito y en reposo",controlBase:"1. Los canales de comunicación deberán usar protocolos seguros para la trasferencia de archivos y se deberá cifrar la información confidencial que este en transito en la nube. (Ej:SSL, IPsec, HTTPS, TLS en su última versión)\n\n2. Gestionar o validar con la Dirección de Seguridad Informática que la conexión para la gestión de las plataformas deberá realizarse mediante el uso de protocolos seguros.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.13.2.1 Políticas y procedimientos \nde transferencia de \ninformación \nA.13.2.2 Acuerdos sobre transferencia de información \nA.18.1.3 Protección de registros",iso27002:"5.14 Information transfer\n8.26 Application security requirements",circular:"2.3.4.9.1. Implementar los algoritmos y protocolos necesarios para brindar una comunicación segura.",sfc:"3.14. Contar con canales de comunicación con el proveedor de servicios en la nube cifrados de extremo a extremo y que en lo posible usen rutas diferentes.",otras:"Se debe desarrollar o configurar que las conexiones sean seguras entre sus componentes (Solución Central Back-end – Dispositivo Móvil) utilizando protocolos seguros de comunicación de extremo a extremo tal como TLS V 1.2 o superiores."}},
      {id:uid(),code:"CT-006",causaBase:"Tecnología obsoleta (hardware/software)",causasAsociadas:"Plataformas desactualizadas o vulnerables",controlBase:"1. Aplicar parches de seguridad para las plataformas implementadas según recomendaciones de los fabricantes, previo análisis de impacto por parte del área de Tecnología.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.11.2.4 Mantenimiento de \nequipos \nA.12.1.2 Gestión de cambios\nA.12.1.3 Gestión de capacidad\nA.12.6.1 Gestión de las vulnerabilidades técnicas\nA.12.7 Controles de auditorías de \nsistemas de información",iso27002:"5.21 Managing information security in the ICT supply chain.",circular:"2.3.4.9.1. Implementar los algoritmos y protocolos necesarios para brindar una comunicación segura..\n\n2.3.3.1.8. Velar porque los niveles de seguridad de los elementos usados en los canales no se vean disminuidos durante toda su vida útil.",sfc:"4.9. La corrección oportuna y eficaz de las vulnerabilidades informáticas detectadas.",otras:"Verificar la corrección de las vulnerabilidades encontradas en la pruebas de seguridad que se ejecutan a la infraestructura y a la plataforma."}},
      {id:uid(),code:"CT-007",causaBase:"Configuraciones Inseguras",causasAsociadas:"Transmisión de información a través de canales y o medios no seguros",controlBase:"1. Utilizar canales seguros por VPN (Ej:Site-to-Site)\n\n2. Configurar los certificados digitales  para utilizar protocoles seguros (Ej: TLS en su última versión) y deshabilitar los protocoles inseguros (Ej: SSL)\n\n3. En caso de requerirse realizar la transmisión de archivos debe realizar por un canal cifrado entre emisor y receptor.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.13.2.1 Políticas y procedimientos \nde transferencia de \ninformación \nA.13.2.2 Acuerdos sobre transferencia de información\nA.13.2.4 Acuerdos de \nconfidencialidad o de no divulgación",iso27002:"5.14 Information transfer",circular:"2.3.3.1.8. Velar porque los niveles de seguridad de los elementos usados en los canales no se vean disminuidos durante toda su vida útil.",sfc:"La corrección oportuna y eficaz de las vulnerabilidades informáticas detectadas.",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-008",causaBase:"Configuraciones Inseguras",causasAsociadas:"Vulnerabilidad día cero",controlBase:"1. Implementar herramientas de prevención y detección de ataques de amenazas avanzadas y vulnerabilidad de dia cero (Ej:Sanbox)\n\n2. Escanear imágenes de contenedores que exponen APIs.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.12.6.1 Gestión de las vulnerabilidades técnicas\nA.12.7 Controles de auditorías de \nsistemas de información",iso27002:"8.8 Management of technical vulnerabilities.",circular:"2.3.4.9.2.  Realizar como mínimo 2 veces al año una prueba de vulnerabilidad y penetración a los equipos, dispositivos y medios de comunicación usados en la realización de operaciones monetarias por este canal. Sin embargo, cuando se realicen cambios en la plataforma que afecten la seguridad del can",sfc:"4.9. La corrección oportuna y eficaz de las vulnerabilidades informáticas detectadas. \n\n7.6Los reportes generales de auditoria, pruebas de vulnerabilidades y estado actual de los servicios contratados.",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-009",causaBase:"Configuraciones Inseguras",causasAsociadas:"Vulnerabilidades tecnológicas compartidas con proveedor o tercero",controlBase:"1. Implementar el procedimiento para la gestión de vulnerabilidad sobre plataformas compartidas con otros clientes. (Ej:Metodo de despliegue nube publica)\n\n2. Validar reputación y seguridad de APIs externas",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.12.6.1 Gestión de las vulnerabilidades técnicas\nA.12.7 Controles de auditorías de \nsistemas de información",iso27002:"5.1 Policies for information security\n5.6 Contact with special interest groups. \n8.8 Management of technical vulnerabilities.",circular:"2.3.4.9.2.  Realizar como mínimo 2 veces al año una prueba de vulnerabilidad y penetración a los equipos, dispositivos y medios de comunicación usados en la realización de operaciones monetarias por este canal. Sin embargo, cuando se realicen cambios en la plataforma que afecten la seguridad del can",sfc:"4.9. La corrección oportuna y eficaz de las vulnerabilidades informáticas detectadas.",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-010",causaBase:"Vulnerabilidad día cero/ Uso Inadecuado de atribuciones",causasAsociadas:"Explotación de vulnerabilidades o brechas de seguridad\nAtaques de inyección de SQL los cuales implican que un atacante se aproveche de estas debilidades para ejecutar consultas en BD no autorizadas y administre los accesos para elevar privilegios.\n Desconocimiento del fabricante y el usuario de los ",controlBase:"1. Ejecutar pruebas de análisis de vulnerabilidades y hacking ético del servicio. Se deben realizar en ambiente de producción (Marcha Blanca).\n\n2. Escaneo de código.\n\n3. Realizar aseguramiento hardening.\n\n4. Principio de mínimo privilegio\n\n5. Validar configuración segura en servidores, bases de datos y aplicaciones.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.12.6.1 Gestión de las vulnerabilidades técnicas\nA.12.7 Controles de auditorías de \nsistemas de información",iso27002:"5.1 Policies for information security\n5.6 Contact with special interest groups. \n8.8 Management of technical vulnerabilities.",circular:"Contar con mecanismos para incrementar la seguridad de los portales, protegiéndolos de ataques de negación de servicio, inyección de código malicioso u objetos maliciosos, que afecten la seguridad de la operación o su conclusión exitosa.",sfc:"4.9. La corrección oportuna y eficaz de las vulnerabilidades informáticas detectadas.",otras:"Se deberán ejecutar pruebas de intrusión sobre la URL, será cotizada con proveedor corporativo por ATH, al home y a la zona transaccional, dependiendo de la asignación o no de usuarios validos de prueba respectivamente, con el fin de evaluar la zona de post autenticación."}},
      {id:uid(),code:"CT-011",causaBase:"Configuraciones Inseguras",causasAsociadas:"Deficiente configuración línea base de seguridad\nHardware y Software con parámetros de fabrica habilitados",controlBase:"1. Gestionar y asegurar por parte del proyecto o proveedor la hardenización de los servidores Onpremise y/o recursos en nube que se implementen. \n\n2. Asegurar que los servidores no cuenten con salida a internet, salvo requisito indispensable de la aplicación. \n\n3. En caso de ser un proyecto Cloud, se debe gestionar la postura de seguridad CIS realizando la remediación, mitigación o excepción de todos los controles fallidos en todos los ambientes.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.5.1.1 Políticas para la seguridad de \nla información\nA.18.2.1 Revisión independiente de la \nseguridad de la información \nA.18.2.2 Cumplimiento con las políticas \ny normas de seguridad \nA.18.2.3 Revisión del cumplimiento \ntécnico",iso27002:"5.23 Information security for use of cloud services",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-012",causaBase:"Configuraciones Inseguras",causasAsociadas:"Incorrecta administración de sesiones",controlBase:"1. Definir máximo 3 intentos de sesión.\n\n2. Configurar el cierre de sesión máximo a los 5 minutos, donde 30 segundos antes del cierre de sesión se alerte al usuario.\n\n3. Restringir la posibilidad de multisesión para los usuarios",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.9.1.1 Política de control de \nacceso \nA.9.2.1 Registro y cancelación \ndel registro de usuarios \nA.9.2.2 Suministro de acceso de usuarios \nA.9.2.3 Gestión de derechos de \nacceso privilegiado \nA.9.2.4 Gestión de información \nde autenticación secreta \nde usuarios \nA.9.2.5 Revisión de los derechos \nde",iso27002:"8.1 User endpoint devices",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-013",causaBase:"Configuraciones Inseguras",causasAsociadas:"Ausencia de ciclo de desarrollo seguro, con lo cual se puede utilizar funciones o componentes inseguros (Interfaces, APIs, imágenes, contenedores y librerías), introducir puertas traseras y presentar entrada y salida de datos inseguros o errados",controlBase:"1. Garantizar la aplicación de una metodología de desarrollo seguro teniendo en cuenta como mínimo requerimientos de seguridad basados en OWASP, siendo el responsable el desarrollador de la aplicación.\n\n2. Para la exposición de API, sea pública o sea privada, externa, interna, la conexión debe realizarse a través de la aplication Gateway with WAF, seguido y complementado por el \"API Management - API Connect\" dependiendo del servicio, que estaría contrastando y validando la conexión contra el dir",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.14.2.1 Política de desarrollo seguro \nA.14.2.2 Procedimientos de control de cambios en sistemas \nA.14.2.4 Restricciones en los cambios a los paquetes de software \nA.14.2.5 Principios de construcción de los sistemas seguros \nA.14.2.6 Ambiente de desarrollo seguro \nA.14.2.7 Desarrollo contratado \nex",iso27002:"8.25 Secure development life cycle",circular:"2.3.5  Requerimientos en materia de actualización de Software",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"1. Ciclo de Vida en el Desarrollo de la Solución:\n1. El sistema se debe codificar bajo estándares de desarrollo seguro. Se toma como base las directrices de codificación segura como “OpenWeb Application Security Project Guidelines” OWASP, entre otros que aseguren contar con controles de entrada, pro"}},
      {id:uid(),code:"CT-014",causaBase:"Configuraciones Inseguras",causasAsociadas:"Incumplimiento por parte Terceros (proveedores, contratistas, outsourcing, otros) de los acuerdos de seguridad y confidencialidad de la Compañía",controlBase:"1. Gestionar al proveedor realizando la revisión y evaluación mensual de operación y SLAs. \n\n2. Los proveedores tecnológico y de nube, deberá firmar el acuerdo de confidencialidad definido por Porvenir",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.15.1.1 Política de seguridad de la \ninformación para las \nrelaciones con proveedores\nA.15.1.2 Tratamiento de la seguridad \ndentro de los acuerdos con \nproveedores \nA.15.1.3 Cadena de suministro de \ntecnología de información y \ncomunicación",iso27002:"5.19 Information security in supplier relantionships\n5.20 Adressing information security within supplier agreements",circular:"2.3.5  Requerimientos en materia de actualización de Software",sfc:"3.5 Verificar que el proveedor ofrezca una disponibilidad de al menos el 99.95% en los servicios prestados en la nube.\n3.13. Establecer procedimientos para verificar el cumplimiento de los acuerdos y niveles de servicio establecidos con el proveedor de servicios en la nube y sus subcontratistas o pa",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-015",causaBase:"Configuraciones Inseguras",causasAsociadas:"Inadecuada segregación de funciones e inapropiada definición de matrices de roles y privilegios.\nFalta de monitoreo y  gestión  de las cuentas de usuarios privilegiados\nComportamiento inusual de cuentas de usuarios privilegiados no monitoreado.",controlBase:"1. Definir las matrices de administración y operación de los servicios en la nube, con roles y responsabilidades  garantizando adecuada segregación de funciones.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.6.1.1 Roles y responsabilidades \npara la seguridad de la información\nA.6.1.2 Separación de deberes \nA.9.1.1 Política de control de \nacceso \nA.9.2.1 Registro y cancelación \ndel registro de usuarios \nA.9.2.2 Suministro de acceso de usuarios",iso27002:"5.2 Information security roles and responsabilities.\n5.3 Segregation of duties\n5.4 Management responsabilities.\n5.15 Access control\n8.2 Privileged access rights",circular:"2.3.3.1.14 Realizar una adecuada segregación de funciones del personal que administre, opere, mantenga y, en general, tenga la posibilidad de acceder a los dispositivos y sistemas usados en los distintos canales e instrumentos para la realización de operaciones. En desarrollo de lo anterior, las ent",sfc:"3.11. Tener bajo su control la administración de usuarios y de privilegios para el acceso a los servicios ofrecidos, así como a las plataformas, aplicaciones y bases de datos que operen en la nube, dependiendo del modelo de servicio contratado.\n4.10. La utilización de técnicas de múltiple factor de ",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-016",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Acceso no autorizado a recursos o uso inapropiado de privilegios",controlBase:"1. Gestión de accesos a través del SCA (Sistema de Control de Acceso) para los roles técnicos del proyecto.\n\n2. Implementar controles para la gestión de usuarios privilegiados.\n\n3. Implementar herramienta para gestión de eventos de seguridad.\n\n4. Monitoreo periódico de las acciones realizadas sobre la plataforma, envío de alertas críticas a las áreas de Seguridad de la información y tecnología.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.9.1.1 Política de control de \nacceso \nA.9.2.1 Registro y cancelación \ndel registro de usuarios \nA.9.2.2 Suministro de acceso de usuarios \nA.9.2.3 Gestión de derechos de \nacceso privilegiado \nA.9.2.4 Gestión de información \nde autenticación secreta \nde usuarios \nA.9.2.5 Revisión de los derechos \nde",iso27002:"5.15 Access control",circular:"2.3.3.1.6.Proteger las claves de acceso a los sistemas de información. En desarrollo de esta obligación, las entidades deben evitar el uso de claves compartidas, genéricas o para grupos. La identificación y autenticación en los dispositivos y sistemas de cómputo de las entidades debe ser única y per",sfc:"3.11. Tener bajo su control la administración de usuarios y de privilegios para el acceso a los servicios ofrecidos, así como a las plataformas, aplicaciones y bases de datos que operen en la nube, dependiendo del modelo de servicio contratado.\n4.10. La utilización de técnicas de múltiple factor de ",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-017",causaBase:"Configuraciones Inseguras",causasAsociadas:"Fuga / sustracción / divulgación de información",controlBase:"1. Implementar una arquitectura  de seguridad perimetral.  Ej: Firewall, WAF,  IDS, IPS, entre otros",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.8.2.1 Clasificación de la información \nA.8.3.2 Disposición de los medios\nA.11.2.1 Ubicación y protección de los equipos\nA.13.2.4 Acuerdos de confidencialidad o de no divulgación \nA.14.1.1 Análisis y especificación de requisitos de seguridad de la información",iso27002:"8.12 Data leakage prevention",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-018",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Inadecuadas medidas para la eliminación o destrucción de la información y borrado seguro para el retiro de servicios total o parcial",controlBase:"1. Especificar la forma y el formato en que el proveedor devolverá la información y los datos a Porvenir cuando finalice el contrato o entregas parciales de información durante su vigencia.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.8.3.2 Disposición de los medios \nA.11.2.7 Disposición segura o reutilización de equipos",iso27002:"7.14 Secure disposal or re-use of equipment.\n8.10 Information deletion",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"4.8. El borrado seguro de los datos existentes en los medios de almacenamiento cuando finalice el contrato, cuando lo solicite la entidad o cuando el proveedor de servicios en la nube elimine y/o reemplace dichos medios.",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-019",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Inexistencia de auditoria y trazabilidad de acciones realizadas en los sistemas y las aplicaciones",controlBase:"1.Generar logs de las aplicaciones,  sistemas y plataformas, definiendo periodicidad de retención y rotación.\n\nDirigirse al \"Manual de Normas Política de Logs para Aplicaciones\" de Porvenir que según el lineamiento corporativo se deben generar los siguientes logs:\n- Inicio de sesión.\n- Administración de cuentas.\n- Uso de privilegios.\n- Acceso a objetos y/o archivos críticos.\n- Cambio de directivas.\n- Eventos emitidos por el servicio.\n- Auditoria.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.12.7 Controles de auditorías de \nsistemas de información",iso27002:"5.14 Information transfer.",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-020",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Autenticación débil del usuario y contraseña en los sistemas, las conexiones y comunicaciones informáticas\nAusencia de mecanismos fuertes de autenticación",controlBase:"1. Implementar mecanismos de autenticación fuerte y doble factor de autenticación, para terceros y administradores de las aplicaciones.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.9.1.1 Política de control de acceso\n9.1.2 Acceso a redes y a servicios en red \nA.9.2.4 Gestión de información secreta para la autenticación de usuarios",iso27002:"5.15 Access control\n5.16 Identity Management\n5.17 Authentication information\n5.18 Acces rigths\n8.5 Secure authentication",circular:"Establecer mecanismos fuertes de autenticación para las operaciones que, de acuerdo con el análisis de riesgo de cada entidad, generen mayor exposición al riesgo de fraude o suplantación. El análisis debe estar documentado y a disposición de la SFC. Igualmente, este análisis debe tener en cuenta asp",sfc:"3.11. Tener bajo su control la administración de usuarios y de privilegios para el acceso a los servicios ofrecidos, así como a las plataformas, aplicaciones y bases de datos que operen en la nube, dependiendo del modelo de servicio contratado.\n4.10. La utilización de técnicas de múltiple factor de ",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-021",causaBase:"Configuraciones Inseguras",causasAsociadas:"Credenciales de acceso comprometidas.",controlBase:"1. Asegurar siempre que sea posible la integración con el DA (Directorio Activo), para la gestión de cuentas de colaboradores y terceros. En caso de no poder realizar la integración la gestión de usuarios deberá cumplir los lineamientos de usuarios y contraseñas de la Dirección de Seguridad de la Información.\n\n2. No se deben almacenar contraseñas  en texto claro. Toda validación de credenciales  deberá hacerse utilizando mecanismos seguros, que garanticen la imposibilidad de obtener la contraseñ",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.9.1.1 Política de control de \nacceso \nA.9.2.1 Registro y cancelación \ndel registro de usuarios \nA.9.2.2 Suministro de acceso de usuarios \nA.9.2.3 Gestión de derechos de \nacceso privilegiado \nA.9.2.4 Gestión de información \nde autenticación secreta \nde usuarios \nA.9.2.5 Revisión de los derechos \nde",iso27002:"5.15 Access control\n5.16 Identity Management\n8.3 Information access restriction",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"3.11. Tener bajo su control la administración de usuarios y de privilegios para el acceso a los servicios ofrecidos, así como a las plataformas, aplicaciones y bases de datos que operen en la nube, dependiendo del modelo de servicio contratado.",otras:"El aplicativo debe permitir la administración de las contraseñas de las cuentas de usuarios y del cliente permitiendo: \nAdministrar el ciclo de vida de la contraseña (creación, bloqueo, desbloqueo, cambio por demanda y cambio por el administrador).  \nEl almacenamiento y transporte de las contraseñas"}},
      {id:uid(),code:"CT-022",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Ejecución de cambios no controlados",controlBase:"1. Asegurar el registro de cambios en ambientes productivos a través del Comité de Cambios. Y para ambientes previos a través de la gestión de cambios simples.\n\n2. Definir tablas y campos sensibles en las Bases de Datos con el proveedor y área funcional que deberán estar monitoreados con Guardium, así como asignar responsable de las alertas y tipo de alertas a parametrizar (update, delete, insert, etc.).",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.12.1.2 Gestión de cambios\nA.12.1.4 Separación de los ambientes \nde desarrollo, pruebas, y operación\nA.14.2.2 Procedimientos de control de cambios en sistemas  \nA.14.2.3 Revisión técnica de las \naplicaciones después de cambios en la plataforma de \noperación \nA.14.2.4 Restricciones en los cambios \na",iso27002:"8.3 Information access restriction\n8.9 Configuration management",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-023",causaBase:"Configuraciones Inseguras",causasAsociadas:"Inadecuados o deficientes mecanismos de respaldo  de la  información",controlBase:"1. Las copias de seguridad de bases de datos deberán ser cifradas y se debe disponer específicamente de una política de respaldo de información donde se indiquen las condiciones de respaldo y tiempos de retención.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.12.3.1 Respaldo de la información",iso27002:"8.13 information backup",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"3.8. Establecer mecanismos que permitan contar con respaldo de la información que se procesa en la nube, la cual debe estar a disposición de la entidad cuando así lo requiera. \n3.9. Garantizar la independencia de su información y de sus copias de respaldo de la información de las otras entidades que",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-024",causaBase:"Configuraciones Inseguras",causasAsociadas:"Aplicaciones obsoletas y desactualizadas que generan incompatibilidad con las nuevas tecnologías.\nDeficiencias en el análisis de capacidad de la infraestructura Tecnologica",controlBase:"1. Implementar procedimiento de gestión de de las capacidades por parte del administración de la plataforma.\n\n2. Validar o gestionar con el Área de Observabilidad el monitoreo permanente a la infraestructura tecnológica que soporta procesos del negocio.\n\n3. Gestionar versiones de APIs para evitar exposición de endpoints antiguos.\n\n4. Configurar rate Limiting y throttling en las API's, limitando el número de solicitudes por IP o token",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.12.1.3 Gestión de capacidad",iso27002:"8.6 Capacity management",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-025",causaBase:"Configuraciones Inseguras",causasAsociadas:"Incumplimiento de los acuerdos de servicio dispuestos en el plan de recuperación ante desastres (DRP) en cuanto a perdida de información (RPO) y tiempo máximo de recuperación (RTO)",controlBase:"1. Todo contrato debe fijar acuerdos de niveles de servicio que permitan garantizar los planes de DRP y en caso de no cumplimiento deberán existir penalizaciones acordadas.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.17.1.1 Planificación de la continuidad \nde la seguridad de la \ninformación \nA.17.1.2 Implementación de la continuidad de la seguridad de la información \nA.17.1.3 Verificación, revisión y \nevaluación de la continuidad de la seguridad de la información",iso27002:"5.29 Information security during disruption \n5.30 ICT readness for business continuity",circular:"La descripción de las pruebas de contingencia y/o continuidad realizadas a los sistemas que implementen o no la participación de los afiliados o usuarios y que tengan el potencial de generar afectación en la prestación de los servicios. Esta información se debe reportar el día hábil anterior al inic",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-026",causaBase:"Configuraciones Inseguras",causasAsociadas:"Inadecuada implementación de controles en aspectos relacionados con Seguridad de la Información y Ciberseguridad en el ciberespacio.",controlBase:"1. Se implementarán controles de seguridad de la información y ciberseguridad, alineados con las recomendaciones del área de riesgos, implementando los controles que permitan la correspondiente mitigación de riesgos",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.5.1.1 Políticas para la seguridad de la información",iso27002:"5.1 Policies for information security",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-027",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Uso de equipos y aplicaciones desactualizados (sistema operativo y aplicaciones) y sin ningún tipo de protección(puertos de comunicación inseguros).\nAntivirus desactualizados que no permiten la adecuada detección de Malware.",controlBase:"1. Se implementarán controles de seguridad de la información y ciberseguridad, alineados con las recomendaciones del área de riesgos, implementando los controles que permitan la correspondiente mitigación de riesgos",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"Validar aplicación directamente en la Matriz Legal de requisitos",iso27002:"Validar aplicación directamente en la Matriz Legal de requisitos",circular:"Validar aplicación directamente en la Matriz Legal de requisitos",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-028",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Uso indebido de credenciales de accesos / No adopción de mecanismos de autenticación fuerte\nParametrización inadecuada de montos, número de transacciones, IP´s autorizadas.",controlBase:"1. Establecer mecanismos fuertes de autorización y autenticación.\n\n2. Restringir número de conexiones por IP\n\n3. Gestión de contraseñas con políticas de complejidad, rotación periódica y uso de gestores seguros.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"Validar aplicación directamente en la Matriz Legal de requisitos",iso27002:"Validar aplicación directamente en la Matriz Legal de requisitos",circular:"2.2.6 Mecanismos fuertes de autenticación: Se entienden como mecanismos fuertes de autenticación los siguientes: y demás requisitos aplicables.",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-029",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Recolección y  Tratamiento Inapropiado de Datos Personales (1581) .\nAcceso no autorizado para revisar y actualizar datos personales, podría resultar en pérdida, mal uso o hurto de la información.\nSeguimiento deficiente al cumplimiento de la normatividad, relacionada con los controles definidos para ",controlBase:"1. Incluir en los contratos con los terceros su responsabilidad como encargados de la información cuando recolecten, almacenen, usen y transfieran datos personales.\n\n2. Verificar Jurisdicciones de tratamiento de información. \n\n3. Documentar Matriz Ciclo de Vida",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.18.1.4 Privacidad y protección de \ninformación de datos \npersonales",iso27002:"5.34 Privacy and protection of personally identifiable information.\n8.12 Data leakage prevention.",circular:"Las entidades vigiladas pueden adoptar tecnologías como realidad aumentada, internet de las cosas, blockchain, inteligencia artificial, machine learning, big data, robots, entre otras, cuando lo consideren pertinente para mejorar la prestación de servicios a los consumidores financieros y optimizar ",sfc:"3.7 Verificar que las jurisdicciones en donde se procesará la información cuenten con normas equivalentes o superiores a las aplicables en Colombia, relacionadas con la protección de datos personales y penalización de actos que atenten contra la confidencialidad, integridad y disponibilidad de los d",otras:"La solución informática debe cumplir como mínimo los siguientes Normativas de seguridad •	Ley 1266 de 2008 diciembre 31, Habeas Data. Congreso de la Republica."}},
      {id:uid(),code:"CT-030",causaBase:"Configuraciones Inseguras",causasAsociadas:"Utilización de datos de producción en ambientes de desarrollo y pruebas",controlBase:"1. Los datos que sean utilizados en ambiente de pruebas y desarrollo, no podrán ser los mismos del ambiente productivo. (ofuscamiento/enmascaramiento).",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.14.2.1 Política de desarrollo seguro \nA.14.2.6 Ambiente de desarrollo seguro \nA.14.2.7 Desarrollo contratado externamente\nA.14.3.1 Protección de datos de prueba",iso27002:"8.12 Data leakage prevention.\n8.29 Security testing in development, test and production environments\n8.30 Outsourced development",circular:"Mantener tres ambientes independientes: uno para el desarrollo de software, otro para la realización de pruebas y un tercer ambiente para los sistemas en producción. En todo caso, el desempeño y la seguridad de un ambiente no pueden influir en los demás.",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-031",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Ataque o intrusión de piratas informáticos, malware (amenaza informática) , espionaje o ingeniería social.\nAtaques de denegación de servicio distribuido (DDOS).\nAntivirus desactualizados que no permiten la adecuada detección de Malware\nEl uso de ingeniería inversa en aplicaciones móviles bancarias\nS",controlBase:"1. Gestionar con la Dirección de Seguridad Informática la instalación de antivirus EDR en los recursos y/o servidores del proyecto.\n\n2. Implementar controles a nivel de WAF.\n\n3. Implementar solución Anti-Phishing en el portal.\n\n4. Ejecutar pruebas de hacking ético y/o escaneo de vulnerabilidades; según aplicación.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.11.1.4 Protección contra amenazas externas y \nambientales \nA.11.2.7 Disposición segura o reutilización de equipos\nA.12.2.1 Controles contra códigos maliciosos",iso27002:"5.7 Threat Intelligence.\n5.19 Information security in supplier relationships.\n5.23 Information security for use of cloud services.\n6.8 Information security event reporting.\n8.1 User endpoint devices.\n8.7 Protection against malware.\n8.15 Logging.",circular:"Contar con mecanismos para incrementar la seguridad de los portales, protegiéndolos de ataques de negación de servicio, inyección de código malicioso u objetos maliciosos, que afecten la seguridad de la operación o su conclusión exitosa.",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-032",causaBase:"Configuraciones Inseguras",causasAsociadas:"Utilización de componentes Opens urce en soluciones tecnológicas\nDesarrollo de Software Inadecuados creados por el tercero que generan vulnerabilidades a nivel de confidencialidad, integridad, disponibilidad y privacidad de la información.",controlBase:"1. Realizar un análisis de código a los componentes o librerías Opensource.\n\n2. Realizar escaneo de vulnerabilidades de código siguiendo las buenas prácticas OWASP",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"A.14.2.1 Política de desarrollo seguro \nA.14.2.5 Principios de construcción de \nlos sistemas seguros \nA.14.2.6 Ambiente de desarrollo \nseguro\nA.14.2.7 Desarrollo contratado \nexternamente",iso27002:"8.4 Acceses to source code.\n8.28 Secure coding",circular:"Mantener tres ambientes independientes: uno para el desarrollo de software, otro para la realización de pruebas y un tercer ambiente para los sistemas en producción. En todo caso, el desempeño y la seguridad de un ambiente no pueden influir en los demás.\n\nImplementar procedimientos que permitan veri",sfc:"Validar aplicación directamente en la Matriz Legal de requisitos",otras:"Validar aplicación directamente en la Matriz Legal de requisitos"}},
      {id:uid(),code:"CT-033",causaBase:"Debilidades de seguridad asociadas a clientes, colaboradores y terceros",causasAsociadas:"Incumplimiento del modelo de seguridad de la información y ciberseguridad (políticas, normas, lineamientos, manuales, entre otros) aprobados al interior de la entidad.",controlBase:"Cumplimiento de las circulares en los procesos, sistemas y controles de la compañía.\n\nCircular Básica Jurídica 029 de la Superintendencia Financiera de Colombia\nCircular Externa 005 de la Superintendencia Financiera de Colombia\nCircular Externa 007 de la Superintendencia Financiera de Colombia\n\nNota: Validar el cumplimiento del numeral 6 \"REMISIÓN DE INFORMACIÓN A LA SFC\", de la circular Externa 005 de la SFC.",riNiv:"Extremo",rrNiv:"Bajo",status:"pendiente",compliance:"",createdAt:today(),normatividad:{iso27001:"Aplica",iso27002:"Aplica",circular:"Aplica",sfc:"Aplica",otras:"Aplica"}}
    ];
    return controls;
  }

function makeDemo(){
  return {id:uid(),name:"Proyecto Demo",publishDate:"2026-04-15",responsible:"Dir. Seguridad de la Información",createdAt:today(),controls:makeBaseData(),evidences:[]};
}

function loadD(){try{var v=localStorage.getItem("rg-v8");return v?JSON.parse(v):null}catch(e){return null}}
function saveD(d){try{localStorage.setItem("rg-v8",JSON.stringify(d))}catch(e){}}

var iS={width:"100%",padding:"12px 16px",borderRadius:10,border:"1px solid "+T.bd,background:T.bg,color:T.tx,fontSize:15,fontFamily:"'DM Sans',sans-serif",outline:"none",boxSizing:"border-box"};
var sS=Object.assign({},iS,{fontSize:13,cursor:"pointer"});
var cS={background:T.sf,borderRadius:14,border:"1px solid "+T.bd,padding:24,transition:"all .15s"};
var lS={fontSize:11,fontWeight:700,color:T.td,marginBottom:5,display:"block",textTransform:"uppercase",letterSpacing:"0.6px"};
var mS={fontFamily:"'Space Mono',monospace"};

function btnS(v,sz){var base={borderRadius:10,border:"none",cursor:"pointer",fontWeight:700,fontFamily:"'DM Sans',sans-serif",display:"inline-flex",alignItems:"center",gap:6,transition:"all .15s"};var szs={sm:{padding:"6px 12px",fontSize:12},lg:{padding:"14px 28px",fontSize:16},md:{padding:"10px 20px",fontSize:14}};var vs={primary:{background:T.ac,color:T.wh},danger:{background:T.ds,color:T.dn},success:{background:T.sc,color:T.wh},outline:{background:"transparent",color:T.ts,border:"1px solid "+T.bd},ghost:{background:"transparent",color:T.ts}};return Object.assign({},base,szs[sz||"md"],vs[v||"primary"])}
function bdg(c,b){return{display:"inline-flex",alignItems:"center",gap:4,padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:700,color:c,background:b,whiteSpace:"nowrap"}}

function NormBox(props){
  var n=props.norm;if(!n)return null;
  var secs=[{k:"iso27001",l:"ISO 27001",c:"#5B21B6",b:"rgba(91,33,182,.08)"},{k:"iso27002",l:"ISO 27002",c:"#1A7AB5",b:"rgba(26,122,181,.08)"},{k:"circular",l:"Circular SFC",c:"#B45309",b:"rgba(180,83,9,.08)"},{k:"sfc",l:"Req. Nube SFC",c:"#166534",b:"rgba(22,101,52,.08)"},{k:"otras",l:"Otras Normas",c:"#B91C1C",b:"rgba(185,28,28,.08)"}];
  var has=secs.filter(function(s){return n[s.k]&&n[s.k].trim()&&n[s.k].indexOf("Validar aplicación directamente")<0&&n[s.k]!=="Aplica"});
  if(!has.length)return null;
  var _open=useState(false),open=_open[0],setOpen=_open[1];
  return h("div",{style:{marginTop:12}},
    h("button",{onClick:function(){setOpen(!open)},style:{display:"flex",alignItems:"center",gap:8,width:"100%",padding:"10px 14px",background:T.sa,border:"1px solid "+T.bd,borderRadius:8,cursor:"pointer",color:T.ts,fontSize:12,fontWeight:700,fontFamily:"'DM Sans',sans-serif",textTransform:"uppercase",letterSpacing:"0.5px"}},
      h("span",{style:{transition:"transform .2s",transform:open?"rotate(90deg)":"rotate(0deg)",fontSize:10}},"▶"),
      h("span",null,"Normatividad aplicable ("+has.length+" fuentes)"),
      has.map(function(s){return h("span",{key:s.k,style:{width:8,height:8,borderRadius:"50%",background:s.c,flexShrink:0}})})
    ),
    open?h("div",{style:{display:"flex",flexDirection:"column",gap:6,marginTop:8}},
      has.map(function(s){return h("div",{key:s.k,style:{background:s.b,borderRadius:8,padding:"8px 12px",border:"1px solid "+s.c+"22"}},h("div",{style:{fontSize:10,fontWeight:700,color:s.c,marginBottom:2}},s.l),h("div",{style:{fontSize:11,color:T.tx,whiteSpace:"pre-line",lineHeight:1.4}},n[s.k]))})
    ):null
  );
}
function Mdl(p){return h("div",{style:{position:"fixed",inset:0,zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.65)",backdropFilter:"blur(6px)"},onClick:p.onClose},h("div",{style:{background:T.sf,borderRadius:18,border:"1px solid "+T.bd,width:560,maxWidth:"95vw",maxHeight:"92vh",overflow:"auto",padding:28},onClick:function(e){e.stopPropagation()}},h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}},h("h3",{style:{margin:0,fontSize:18,fontWeight:800,color:T.tx}},p.title),h("button",{onClick:p.onClose,style:{background:"none",border:"none",color:T.td,fontSize:20,cursor:"pointer"}},"✕")),p.children))}
function Fld(p){return h("div",{style:{marginBottom:16}},h("label",{style:lS},p.label),p.children)}
function SBdg(p){var s=CTRL_ST[p.status];if(!s)return null;return h("span",{style:bdg(s.c,s.c+"18")},s.i+" "+s.l)}
function EvBdg(p){var s=EV_ST[p.status];if(!s)return null;return h("span",{style:bdg(s.c,s.c+"18")},s.i+" "+s.l)}

// ═══ QUESTIONNAIRE ═══
function Questionnaire(props){
  var proj=props.proj,onSave=props.onSave,onFinish=props.onFinish;
  var _idx=useState(0),idx=_idx[0],setIdx=_idx[1];
  var items=proj.controls;
  var total=items.length;
  if(total===0)return h("div",{style:{textAlign:"center",padding:60}},h("div",{style:{fontSize:48}},"📭"),h("p",{style:{color:T.ts}},"No hay controles"));
  var safeIdx=Math.min(idx,total-1);
  var cur=items[safeIdx];
  var filled=items.filter(function(x){return x.compliance&&x.compliance.trim()}).length;
  var _lv=useState(cur.compliance||""),lv=_lv[0],setLv=_lv[1];
  useEffect(function(){setLv(items[Math.min(idx,total-1)].compliance||"")},[idx]);
  function saveGo(ni){onSave(cur.id,lv);setIdx(ni)}

  return h("div",{style:{maxWidth:900,margin:"0 auto",padding:"0 0 30px"}},
    h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},
      h("button",{style:btnS("ghost","sm"),onClick:function(){onSave(cur.id,lv);onFinish()}},"← Dashboard"),
      h("span",{style:Object.assign({},mS,{fontSize:12,color:T.sc,fontWeight:700})},filled+"/"+total+" completados")
    ),
    h("div",{style:{height:6,background:T.sa,borderRadius:3,overflow:"hidden",marginBottom:14}},h("div",{style:{height:"100%",width:(filled/total*100)+"%",background:"linear-gradient(90deg,"+T.ac+","+T.sc+")",borderRadius:3,transition:"width .4s"}})),
    h("div",{style:{display:"flex",gap:3,flexWrap:"wrap",marginBottom:14,justifyContent:"center"}},items.map(function(item,i){
      var done=item.compliance&&item.compliance.trim();var active=i===safeIdx;
      return h("button",{key:i,onClick:function(){onSave(cur.id,lv);setIdx(i)},style:{width:26,height:26,borderRadius:"50%",border:active?"2px solid "+T.ah:"2px solid transparent",background:active?T.ac:done?T.sc:T.sa,color:active||done?T.wh:T.td,fontSize:9,fontWeight:700,cursor:"pointer",fontFamily:"'Space Mono',monospace",display:"flex",alignItems:"center",justifyContent:"center"}},i+1)
    })),
    h("div",{style:{background:T.sf,borderRadius:12,border:"1px solid "+T.ac+"44",overflow:"hidden"}},
      h("div",{style:{background:T.ac,padding:"10px 18px",display:"flex",justifyContent:"space-between",alignItems:"center"}},
        h("div",null,
          h("span",{style:{fontSize:10,color:"rgba(255,255,255,.6)",fontWeight:600}},"PREGUNTA "+(safeIdx+1)+" DE "+total+" — "),
          h("span",{style:{fontSize:10,color:"rgba(255,255,255,.6)"}},cur.code)
        ),
        h("span",{style:{fontSize:14,fontWeight:800,color:T.wh}},cur.causaBase)
      ),
      h("div",{style:{padding:"12px 18px",borderBottom:"1px solid "+T.bd}},
        h("div",{style:{fontSize:10,fontWeight:700,color:T.td,textTransform:"uppercase",marginBottom:4}},"Causas asociadas:"),
        h("div",{style:{fontSize:12,color:T.ts,lineHeight:1.5,padding:"8px 12px",background:T.sa,borderRadius:6}},cur.causasAsociadas)
      ),
      h("div",{style:{padding:"12px 18px",borderBottom:"1px solid "+T.bd}},
        h("div",{style:{fontSize:10,fontWeight:700,color:T.ac,textTransform:"uppercase",marginBottom:6}},"Control a validar:"),
        h("div",{style:{fontSize:13,color:T.tx,lineHeight:1.7,padding:"10px 14px",background:T.as,borderRadius:8,border:"1px solid "+T.ac+"33",whiteSpace:"pre-line"}},cur.controlBase)
      ),
      h("div",{style:{padding:"6px 18px 10px"}},h(NormBox,{norm:cur.normatividad})),
      h("div",{style:{padding:"0 18px 16px"}},
        h("div",{style:{background:T.bg,borderRadius:10,padding:"14px 16px",border:"2px dashed "+T.wn+"55"}},
          h("label",{style:{fontSize:13,fontWeight:800,color:T.wn,display:"block",marginBottom:8}},"✏️  ¿Cómo se cumple este control en tu proyecto?"),
          h("textarea",{key:"ta-"+cur.id,style:Object.assign({},iS,{minHeight:120,resize:"vertical",lineHeight:"1.6",fontSize:13}),value:lv,onChange:function(e){setLv(e.target.value)},placeholder:"Escribe aquí tu respuesta describiendo cómo se cumple este control..."}),
          h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8}},
            lv.trim()?h("span",{style:bdg(T.sc,T.ss)},"✓ Respondido"):h("span",{style:bdg(T.wn,T.ws)},"⏳ Sin responder"),
            h("div",{style:{display:"flex",gap:6}},
              lv.trim()?h("button",{style:btnS("danger","sm"),onClick:function(){setLv("");onSave(cur.id,"")}},"🗑 Limpiar"):null,
              h("button",{style:Object.assign({},btnS("primary","sm"),{opacity:lv!==(cur.compliance||"")?1:.5}),onClick:function(){onSave(cur.id,lv)}},lv!==(cur.compliance||"")?"💾 Guardar":"💾 Guardado")
            )
          )
        )
      )
    ),
    h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:16}},
      h("button",{style:btnS(safeIdx>0?"outline":"ghost","sm"),disabled:safeIdx===0,onClick:function(){saveGo(safeIdx-1)}},"← Anterior"),
      h("div",{style:{display:"flex",gap:6,alignItems:"center"}},
        h("span",{style:Object.assign({},mS,{fontSize:12,color:T.td})},(safeIdx+1)+"/"+total),
        h("button",{style:Object.assign({},btnS("outline","sm"),{marginLeft:6}),onClick:function(){onSave(cur.id,lv);onFinish()}},"💾 Guardar y salir")
      ),
      safeIdx<total-1?h("button",{style:btnS("primary","sm"),onClick:function(){saveGo(safeIdx+1)}},"Siguiente →"):h("button",{style:btnS("success"),onClick:function(){onSave(cur.id,lv);onFinish()}},"✓ Finalizar")
    ),
    filled===total?h("div",{style:{marginTop:30,textAlign:"center",padding:20,background:T.ss,borderRadius:12}},h("div",{style:{fontSize:32}},"🎉"),h("div",{style:{fontSize:16,fontWeight:800,color:T.sc}},"¡Todos los controles respondidos!")):null
  );
}

// ═══ EVIDENCE FLOW ═══
function EvidenceFlow(props){
  var proj=props.proj,onSave=props.onSave,onBack=props.onBack;
  var _s=useState(1),step=_s[0],setStep=_s[1];
  var _ctrl=useState(null),ctrl=_ctrl[0],setCtrl=_ctrl[1];
  var _done=useState(false),done=_done[0],setDone=_done[1];
  var _type=useState(EV_TYPES[0]),et=_type[0],setEt=_type[1];
  var _desc=useState(""),ed=_desc[0],setEd=_desc[1];
  var _date=useState(today()),edt=_date[0],setEdt=_date[1];
  var _notes=useState(""),en=_notes[0],setEn=_notes[1];
  var _rev=useState(""),er=_rev[0],setEr=_rev[1];
  var _search=useState(""),sch=_search[0],setSch=_search[1];

  var _files=useState([]),files=_files[0],setFiles=_files[1];

  function handleFiles(e){
    var fileList=e.target.files;
    if(!fileList||!fileList.length)return;
    var newFiles=[];
    var pending=fileList.length;
    for(var i=0;i<fileList.length;i++){
      (function(file){
        var reader=new FileReader();
        reader.onload=function(ev){
          newFiles.push({name:file.name,size:file.size,type:file.type,data:ev.target.result});
          pending--;
          if(pending===0)setFiles(function(prev){return prev.concat(newFiles)});
        };
        reader.readAsDataURL(file);
      })(fileList[i]);
    }
  }
  function removeFile(idx){setFiles(function(prev){return prev.filter(function(_,i){return i!==idx})})}
  function formatSize(bytes){if(bytes<1024)return bytes+" B";if(bytes<1048576)return(bytes/1024).toFixed(1)+" KB";return(bytes/1048576).toFixed(1)+" MB"}
  function fileIcon(name){var ext=(name||"").split(".").pop().toLowerCase();if(["pdf"].indexOf(ext)>=0)return "📄";if(["jpg","jpeg","png","gif","webp","bmp"].indexOf(ext)>=0)return "🖼️";if(["doc","docx"].indexOf(ext)>=0)return "📝";if(["xls","xlsx"].indexOf(ext)>=0)return "📊";return "📎"}

  function doSave(){if(!ctrl||!ed)return;onSave({controlId:ctrl.id,type:et,description:ed,date:edt,notes:en,reviewer:er,files:files.map(function(f){return{name:f.name,size:f.size,type:f.type,data:f.data}})});setDone(true)}
  function reset(){setStep(1);setCtrl(null);setDone(false);setEt(EV_TYPES[0]);setEd("");setEdt(today());setEn("");setEr("");setSch("");setFiles([])}

  if(done)return h("div",{style:{maxWidth:550,margin:"0 auto",textAlign:"center",padding:"50px 20px"}},
    h("div",{style:{fontSize:52,marginBottom:14}},"✅"),
    h("h2",{style:{margin:"0 0 6px",fontSize:20,fontWeight:800,color:T.sc}},"Evidencia Registrada"),
    h("p",{style:{fontSize:13,color:T.ts}},"Vinculada a ",h("strong",{style:{color:T.ac}},ctrl.code+" — "+ctrl.causaBase)),
    h("div",{style:{display:"flex",gap:10,justifyContent:"center",marginTop:20}},h("button",{style:btnS("primary"),onClick:reset},"＋ Otra"),h("button",{style:btnS("outline"),onClick:onBack},"Volver"))
  );

  var filtered=proj.controls.filter(function(c){return !sch||((c.code+" "+c.causaBase+" "+c.controlBase).toLowerCase().indexOf(sch.toLowerCase())>=0)});

  return h("div",{style:{maxWidth:700,margin:"0 auto"}},
    h("button",{style:btnS("ghost","sm"),onClick:onBack},"← Volver"),
    h("h2",{style:{margin:"12px 0 4px",fontSize:22,fontWeight:800}},"Agregar Evidencia"),

    step===1?h("div",null,
      h("p",{style:{fontSize:13,color:T.ts,marginBottom:16}},"Selecciona el control al que pertenece la evidencia:"),
      h("input",{style:Object.assign({},iS,{marginBottom:12}),placeholder:"Buscar control...",value:sch,onChange:function(e){setSch(e.target.value)}}),
      h("div",{style:{display:"flex",flexDirection:"column",gap:8}},filtered.map(function(c){
        var ev=proj.evidences.filter(function(e){return e.controlId===c.id}).length;
        return h("div",{key:c.id,style:Object.assign({},cS,{cursor:"pointer"}),onClick:function(){setCtrl(c);setStep(2)}},
          h("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3}},
            h("span",{style:Object.assign({},mS,{fontSize:10,color:T.td})},c.code),
            h(SBdg,{status:c.status}),
            ev>0?h("span",{style:bdg(T.inf,T.inf+"18")},ev+" ev."):null
          ),
          h("div",{style:{fontSize:13,fontWeight:700}},c.causaBase),
          h("div",{style:{fontSize:11,color:T.ts,marginTop:2}},c.controlBase.substring(0,100)+"...")
        );
      }))
    ):null,

    step===2&&ctrl?h("div",null,
      h("div",{style:Object.assign({},cS,{marginBottom:16,background:T.as,borderColor:T.ac})},
        h("div",{style:{fontSize:10,color:T.td}},"Control seleccionado:"),
        h("div",{style:{fontSize:14,fontWeight:700,marginTop:4}},ctrl.code+" — "+ctrl.causaBase),
        h("div",{style:{fontSize:12,color:T.ts,marginTop:4}},ctrl.controlBase.substring(0,200))
      ),
      h(Fld,{label:"Tipo de evidencia"},h("select",{style:Object.assign({},sS,{width:"100%"}),value:et,onChange:function(e){setEt(e.target.value)}},EV_TYPES.map(function(t){return h("option",{key:t},t)}))),
      h(Fld,{label:"Descripción de la evidencia"},h("textarea",{style:Object.assign({},iS,{minHeight:80,resize:"vertical"}),value:ed,onChange:function(e){setEd(e.target.value)},placeholder:"Describe la evidencia..."})),
      h(Fld,{label:"Adjuntar archivos (PDF, imágenes, Word, Excel)"},
        h("div",null,
          h("label",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"16px 20px",border:"2px dashed "+T.bd,borderRadius:10,cursor:"pointer",background:T.bg,transition:"all .15s",color:T.ts,fontSize:13,fontWeight:600}},
            h("input",{type:"file",multiple:true,accept:".pdf,.png,.jpg,.jpeg,.gif,.doc,.docx,.xls,.xlsx,.pptx,.txt,.csv",onChange:handleFiles,style:{display:"none"}}),
            h("span",{style:{fontSize:24}},"📁"),
            h("span",null,"Haz clic para seleccionar archivos")
          ),
          files.length>0?h("div",{style:{display:"flex",flexDirection:"column",gap:6,marginTop:10}},
            files.map(function(f,i){
              return h("div",{key:i,style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:T.sa,borderRadius:8,border:"1px solid "+T.bd}},
                h("span",{style:{fontSize:20}},fileIcon(f.name)),
                h("div",{style:{flex:1,minWidth:0}},
                  h("div",{style:{fontSize:13,fontWeight:600,color:T.tx,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},f.name),
                  h("div",{style:{fontSize:10,color:T.td,marginTop:1}},formatSize(f.size))
                ),
                f.type&&f.type.indexOf("image")>=0?h("img",{src:f.data,style:{width:40,height:40,borderRadius:6,objectFit:"cover"}}):null,
                h("button",{onClick:function(){removeFile(i)},style:{background:"none",border:"none",color:T.dn,cursor:"pointer",fontSize:14,padding:4}},"✕")
              );
            })
          ):null
        )
      ),
      h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},
        h(Fld,{label:"Fecha"},h("input",{type:"date",style:iS,value:edt,onChange:function(e){setEdt(e.target.value)}})),
        h(Fld,{label:"Revisor"},h("input",{style:iS,value:er,onChange:function(e){setEr(e.target.value)}}))
      ),
      h(Fld,{label:"Notas"},h("textarea",{style:Object.assign({},iS,{minHeight:50,resize:"vertical"}),value:en,onChange:function(e){setEn(e.target.value)}})),
      h("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18}},
        h("button",{style:btnS("outline"),onClick:function(){setStep(1)}},"← Cambiar control"),
        h("button",{style:btnS("primary","lg"),onClick:doSave,disabled:!ed},"📎 Registrar Evidencia")
      )
    ):null
  );
}

// ═══ ZOOM VIEWER ═══
function ZoomViewer(props){
  var _z=useState(1),zoom=_z[0],setZoom=_z[1];
  var _drag=useState(false),dragging=_drag[0],setDragging=_drag[1];
  var _pos=useState({x:0,y:0}),pos=_pos[0],setPos=_pos[1];
  var _start=useState({x:0,y:0}),start=_start[0],setStart=_start[1];

  function zIn(){setZoom(function(z){return Math.min(z+0.5,5)})}
  function zOut(){setZoom(function(z){return Math.max(z-0.5,0.5)})}
  function zReset(){setZoom(1);setPos({x:0,y:0})}

  function onWheel(e){
    e.preventDefault();
    if(e.deltaY<0)zIn();else zOut();
  }

  function onDown(e){
    if(zoom<=1)return;
    setDragging(true);
    setStart({x:e.clientX-pos.x,y:e.clientY-pos.y});
  }
  function onMove(e){
    if(!dragging)return;
    setPos({x:e.clientX-start.x,y:e.clientY-start.y});
  }
  function onUp(){setDragging(false)}

  return h("div",{style:{padding:"8px 14px 14px"}},
    // Zoom controls
    h("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:8}},
      h("button",{onClick:zOut,style:Object.assign({},btnS("outline","sm"),{width:36,justifyContent:"center",fontSize:18,padding:"4px"})},"−"),
      h("span",{style:Object.assign({},mS,{fontSize:12,color:T.ts,minWidth:50,textAlign:"center"})},Math.round(zoom*100)+"%"),
      h("button",{onClick:zIn,style:Object.assign({},btnS("outline","sm"),{width:36,justifyContent:"center",fontSize:18,padding:"4px"})},"+"),
      h("button",{onClick:zReset,style:btnS("ghost","sm")},"↺ Reset")
    ),
    // Image container
    h("div",{
      style:{overflow:"hidden",borderRadius:8,background:"#f5f5f5",cursor:zoom>1?"grab":"zoom-in",position:"relative",maxHeight:500},
      onWheel:onWheel,
      onMouseDown:onDown,
      onMouseMove:onMove,
      onMouseUp:onUp,
      onMouseLeave:onUp
    },
      h("img",{src:props.src,style:{width:"100%",transform:"scale("+zoom+") translate("+pos.x/zoom+"px,"+pos.y/zoom+"px)",transformOrigin:"center center",transition:dragging?"none":"transform .2s",display:"block",userSelect:"none",pointerEvents:"none"}})
    ),
    h("div",{style:{fontSize:10,color:T.td,textAlign:"center",marginTop:6}},"Scroll o botones +/− para zoom · Arrastra para mover")
  );
}

// ═══ EDIT EVIDENCE MODAL ═══
function EditEvModal(props){
  var ev=props.ev,onSave=props.onSave,onClose=props.onClose;
  var _t=useState(ev.type||EV_TYPES[0]),et=_t[0],setEt=_t[1];
  var _d=useState(ev.description||""),ed=_d[0],setEd=_d[1];
  var _dt=useState(ev.date||today()),edt=_dt[0],setEdt=_dt[1];
  var _n=useState(ev.notes||""),en=_n[0],setEn=_n[1];
  var _r=useState(ev.reviewer||""),er=_r[0],setEr=_r[1];
  var _f=useState(ev.files||[]),files=_f[0],setFiles=_f[1];

  function handleFiles(e){
    var fileList=e.target.files;if(!fileList||!fileList.length)return;
    var newFiles=[];var pending=fileList.length;
    for(var i=0;i<fileList.length;i++){
      (function(file){var reader=new FileReader();reader.onload=function(ev2){newFiles.push({name:file.name,size:file.size,type:file.type,data:ev2.target.result});pending--;if(pending===0)setFiles(function(prev){return prev.concat(newFiles)})};reader.readAsDataURL(file)})(fileList[i]);
    }
  }
  function removeFile(idx){setFiles(function(prev){return prev.filter(function(_,i){return i!==idx})})}

  return h(Mdl,{title:"Editar Evidencia",onClose:onClose},
    h(Fld,{label:"Tipo de evidencia"},h("select",{style:Object.assign({},sS,{width:"100%"}),value:et,onChange:function(e){setEt(e.target.value)}},EV_TYPES.map(function(t){return h("option",{key:t},t)}))),
    h(Fld,{label:"Descripción"},h("textarea",{style:Object.assign({},iS,{minHeight:80,resize:"vertical"}),value:ed,onChange:function(e){setEd(e.target.value)}})),
    h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},
      h(Fld,{label:"Fecha"},h("input",{type:"date",style:iS,value:edt,onChange:function(e){setEdt(e.target.value)}})),
      h(Fld,{label:"Revisor"},h("input",{style:iS,value:er,onChange:function(e){setEr(e.target.value)}}))
    ),
    h(Fld,{label:"Notas"},h("textarea",{style:Object.assign({},iS,{minHeight:50,resize:"vertical"}),value:en,onChange:function(e){setEn(e.target.value)}})),
    // Current files
    h(Fld,{label:"Archivos adjuntos"},
      h("div",null,
        files.length>0?h("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:10}},
          files.map(function(f,i){
            var ext=(f.name||"").split(".").pop().toLowerCase();
            var icon=["pdf"].indexOf(ext)>=0?"📄":["jpg","jpeg","png","gif","webp"].indexOf(ext)>=0?"🖼️":["doc","docx"].indexOf(ext)>=0?"📝":["xls","xlsx"].indexOf(ext)>=0?"📊":"📎";
            return h("div",{key:i,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",background:T.sa,borderRadius:6,border:"1px solid "+T.bd}},
              h("span",{style:{fontSize:18}},icon),
              h("div",{style:{flex:1,fontSize:12,color:T.tx}},f.name),
              h("button",{onClick:function(){removeFile(i)},style:{background:"none",border:"none",color:T.dn,cursor:"pointer",fontSize:13}},"✕")
            );
          })
        ):null,
        h("label",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"12px 16px",border:"2px dashed "+T.bd,borderRadius:8,cursor:"pointer",background:T.bg,color:T.ts,fontSize:12,fontWeight:600}},
          h("input",{type:"file",multiple:true,accept:".pdf,.png,.jpg,.jpeg,.gif,.doc,.docx,.xls,.xlsx,.pptx,.txt,.csv",onChange:handleFiles,style:{display:"none"}}),
          "📁 Agregar más archivos"
        )
      )
    ),
    h("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:20}},
      h("button",{style:btnS("outline"),onClick:onClose},"Cancelar"),
      h("button",{style:btnS("primary"),disabled:!ed,onClick:function(){onSave({type:et,description:ed,date:edt,notes:en,reviewer:er,files:files})}},"💾 Guardar Cambios")
    )
  );
}

// ═══ AUTH SYSTEM (AD-Ready Architecture) ═══
// AUTH PROVIDER: Currently local storage. Replace authenticate() with AD/LDAP/OAuth call.
// Expected AD integration points marked with [AD-INTEGRATION]

var AUTH_ROLES = {
  admin: { l: "Administrador", perms: ["create_project","delete_project","fill_controls","add_evidence","approve_evidence","edit_evidence","delete_evidence","manage_users"] },
  lider: { l: "Líder Técnico", perms: ["create_project","fill_controls","add_evidence","approve_evidence","edit_evidence","delete_evidence"] },
  analista: { l: "Analista", perms: ["fill_controls","add_evidence","edit_evidence"] },
  auditor: { l: "Auditor / Revisor", perms: ["approve_evidence"] },
  viewer: { l: "Solo lectura", perms: [] }
};

function loadUsers(){try{var v=localStorage.getItem("l15-users");return v?JSON.parse(v):null}catch(e){return null}}
function saveUsers(d){try{localStorage.setItem("l15-users",JSON.stringify(d))}catch(e){}}
function loadSession(){try{var v=localStorage.getItem("l15-session");return v?JSON.parse(v):null}catch(e){return null}}
function saveSession(d){try{if(d){localStorage.setItem("l15-session",JSON.stringify(d))}else{localStorage.removeItem("l15-session")}}catch(e){}}

var DEFAULT_USERS = [
  { id: "admin", username: "admin", name: "Administrador", email: "admin@empresa.com", role: "admin", password: "admin123", active: true, createdAt: "2026-01-01" },
  { id: "lider1", username: "lider", name: "Líder Técnico", email: "lider@empresa.com", role: "lider", password: "lider123", active: true, createdAt: "2026-01-01" }
];

// [AD-INTEGRATION] Replace this function with:
// async function authenticate(username, password) {
//   const response = await fetch('/api/auth/ldap', { method: 'POST', body: JSON.stringify({username, password}) });
//   return response.json(); // { success, user, token }
// }
function authenticateLocal(users, username, password) {
  var user = users.find(function(u) { return (u.username === username || u.email === username) && u.password === password && u.active; });
  return user || null;
}

function LoginScreen(props) {
  var onLogin = props.onLogin;
  var _u = useState(""), user = _u[0], setUser = _u[1];
  var _pw = useState(""), pw = _pw[0], setPw = _pw[1];
  var _err = useState(""), err = _err[0], setErr = _err[1];
  var _loading = useState(false), loading = _loading[0], setLoading = _loading[1];

  function doLogin() {
    if (!user || !pw) { setErr("Ingresa usuario y contraseña"); return; }
    setLoading(true); setErr("");
    var users=loadUsers();var allUsers=users&&users.length>0?users:DEFAULT_USERS;var found=authenticateLocal(allUsers,user,pw);if(found){var session={userId:found.id,username:found.username,name:found.name,email:found.email,role:found.role,loginAt:new Date().toISOString()};saveSession(session);onLogin(session)}else{setErr("Usuario o contraseña incorrectos");setLoading(false)}
  }

  function onKeyDown(e) { if (e.key === "Enter") doLogin(); }

  return h("div", { style: { fontFamily: "'DM Sans',sans-serif", background: T.bg, color: T.tx, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" } },
    h("link", { href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap", rel: "stylesheet" }),
    h("div", { style: { width: 420, maxWidth: "90vw" } },
      // Logo
      h("div", { style: { textAlign: "center", marginBottom: 40 } },
        h("div", { style: { width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg," + T.ac + ",#F59E0B)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 28, color: T.wh, fontWeight: 900, marginBottom: 16 } }, "L"),
        h("h1", { style: { margin: 0, fontSize: 32, fontWeight: 900, letterSpacing: "-0.5px" } }, "Línea 1.5"),
        h("p", { style: { margin: "6px 0 0", fontSize: 14, color: T.ts } }, "Gestión de Riesgos Tecnológicos")
      ),
      // Login card
      h("div", { style: Object.assign({}, cS, { padding: 32 }) },
        h("h2", { style: { margin: "0 0 20px", fontSize: 18, fontWeight: 800, textAlign: "center" } }, "Iniciar Sesión"),
        // [AD-INTEGRATION] Add: "Iniciar con Active Directory" button here
        // h("button", { style: btnS("outline","lg"), onClick: adLogin }, "🏢 Iniciar con Active Directory"),
        // h("div", { style: { textAlign:"center", margin:"16px 0", color:T.td, fontSize:12 } }, "o con cuenta local"),
        h(Fld, { label: "Usuario o correo electrónico" },
          h("input", { style: iS, value: user, onChange: function(e) { setUser(e.target.value); }, onKeyDown: onKeyDown, placeholder: "usuario@empresa.com", autoFocus: true })
        ),
        h(Fld, { label: "Contraseña" },
          h("input", { type: "password", style: iS, value: pw, onChange: function(e) { setPw(e.target.value); }, onKeyDown: onKeyDown, placeholder: "••••••••" })
        ),
        err ? h("div", { style: { padding: "10px 14px", background: T.ds, borderRadius: 8, color: T.dn, fontSize: 13, fontWeight: 600, marginBottom: 16 } }, err) : null,
        h("button", { style: Object.assign({}, btnS("primary", "lg"), { width: "100%", justifyContent: "center" }), onClick: doLogin, disabled: loading }, loading ? "Verificando..." : "Ingresar"),
        h("div", { style: { marginTop: 20, padding: "14px", background: T.sa, borderRadius: 8, border: "1px solid " + T.bd } },
          h("div", { style: { fontSize: 11, fontWeight: 700, color: T.td, textTransform: "uppercase", marginBottom: 6 } }, "Cuentas de prueba"),
          h("div", { style: { fontSize: 12, color: T.ts, lineHeight: 1.8 } },
            "👤 admin / admin123 (Administrador)",
            h("br"),
            "👤 lider / lider123 (Líder Técnico)"
          )
        )
      ),
      // Footer
      h("div", { style: { textAlign: "center", marginTop: 20, fontSize: 11, color: T.td } },
        "Preparado para integración con Active Directory (LDAP/OAuth 2.0)"
        // [AD-INTEGRATION] Show: "Autenticación provista por Azure AD / LDAP"
      )
    )
  );
}

// ═══ APP WRAPPER WITH AUTH ═══
export default function AppWrapper() {
  var _session = useState(null), session = _session[0], setSession = _session[1];
  var _authReady = useState(false), authReady = _authReady[0], setAuthReady = _authReady[1];

  useEffect(function() {
    (function(){var s=loadSession();if(s&&s.userId){setSession(s)}setAuthReady(true)})();
  }, []);

  function handleLogin(s) { setSession(s); }
  function handleLogout() { setSession(null); saveSession(null); }

  if (!authReady) return h("div", { style: { fontFamily: "'DM Sans',sans-serif", background: T.bg, color: T.tx, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" } }, "Cargando...");
  if (!session) return h(LoginScreen, { onLogin: handleLogin });
  return h(MainApp, { session: session, onLogout: handleLogout });
}

// ═══ MAIN APP (receives session) ═══
function MainApp(props){
  var session=props.session,onLogout=props.onLogout;
  var _p=useState(null),projects=_p[0],setProjects=_p[1];
  var _pid=useState(null),pid=_pid[0],setPid=_pid[1];
  var _v=useState("projects"),view=_v[0],setView=_v[1];
  var _rdy=useState(false),ready=_rdy[0],setReady=_rdy[1];
  var _m=useState(null),modal=_m[0],setModal=_m[1];
  var _pn=useState(""),pn=_pn[0],sPn=_pn[1];
  var _pd=useState(today()),pdt=_pd[0],sPd=_pd[1];
  var _pr=useState(""),prsp=_pr[0],sPr=_pr[1];
  var _fs=useState("all"),fStatus=_fs[0],setFStatus=_fs[1];
  var _prev=useState(null),preview=_prev[0],setPreview=_prev[1];
  var _editEv=useState(null),editEv=_editEv[0],setEditEv=_editEv[1];
  var _ps2=useState(""),projSearch=_ps2[0],setProjSearch=_ps2[1];
  var _pv2=useState("all"),projFilter=_pv2[0],setProjFilter=_pv2[1];
  var _users=useState(null),users=_users[0],setUsers=_users[1];
  var _au=useState(""),adminSearch=_au[0],setAdminSearch=_au[1];
  var _am=useState(null),adminModal=_am[0],setAdminModal=_am[1];
  var _anu=useState(""),newUser=_anu[0],setNewUser=_anu[1];
  var _ann=useState(""),newName=_ann[0],setNewName=_ann[1];
  var _ane=useState(""),newEmail=_ane[0],setNewEmail=_ane[1];
  var _anr=useState("lider"),newRole=_anr[0],setNewRole=_anr[1];
  var _anp=useState(""),newPw=_anp[0],setNewPw=_anp[1];
  var _aeu=useState(null),editingUser=_aeu[0],setEditingUser=_aeu[1];
  var _apm=useState(null),permUser=_apm[0],setPermUser=_apm[1];

  useEffect(function(){(function(){var d=loadD();setProjects(d&&d.length>0?d:[makeDemo()]);setReady(true)})()},[]);
  useEffect(function(){if(ready&&projects)saveD(projects)},[projects,ready]);
  useEffect(function(){var u=loadUsers();setUsers(u&&u.length>0?u:DEFAULT_USERS)},[]);
  useEffect(function(){if(users)saveUsers(users)},[users]);

  var proj=useMemo(function(){return projects?projects.find(function(p){return p.id===pid})||null:null},[projects,pid]);
  function up(fn){setProjects(function(ps){return ps.map(function(p){return p.id===pid?fn(p):p})})}
  function addProject(){if(!pn||!prsp)return;var np={id:uid(),name:pn,publishDate:pdt,responsible:prsp,createdAt:today(),controls:makeBaseData(),evidences:[]};setProjects(function(ps){return ps.concat([np])});setPid(np.id);setView("dashboard");setModal(null);sPn("");sPd(today());sPr("")}
  function delProject(id){setProjects(function(ps){return ps.filter(function(p){return p.id!==id})});if(pid===id){setPid(null);setView("projects")}}
  function setComp(id,val){up(function(p){return Object.assign({},p,{controls:p.controls.map(function(c){return c.id===id?Object.assign({},c,{compliance:val}):c})})})}
  function addEv(d){up(function(p){return Object.assign({},p,{evidences:p.evidences.concat([Object.assign({},d,{id:uid(),status:"en_revision",createdAt:today()})])})})}
  function setEvSt(id,st){up(function(p){return Object.assign({},p,{evidences:p.evidences.map(function(e){return e.id===id?Object.assign({},e,{status:st,reviewer:"Revisor"}):e})})})}
  function delEv(id){if(!confirm("¿Eliminar esta evidencia?"))return;up(function(p){return Object.assign({},p,{evidences:p.evidences.filter(function(e){return e.id!==id})})})}
  function updateEv(id,data){up(function(p){return Object.assign({},p,{evidences:p.evidences.map(function(e){return e.id===id?Object.assign({},e,data):e})})})}

  // ═══ EXPORT FUNCTION ═══
  var MATRIX_TEMPLATE="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";

  function exportProject(project){
    if(!project)return;
    try{
      var s2=document.createElement("script");
      s2.src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
      if(!document.querySelector('script[src*="jszip"]'))document.head.appendChild(s2);
      setTimeout(function(){
        if(typeof JSZip==="undefined"){alert("Cargando librerías, intenta de nuevo en 2 segundos.");return}
        doExport(project);
      },typeof JSZip!=="undefined"?100:2500);
    }catch(e){alert("Error: "+e.message)}
  }

  function doExport(project){
    var mainZip=new JSZip();

    // ── MODIFY EXCEL BY EDITING XML INSIDE THE XLSX ZIP ──
    var templateBytes=Uint8Array.from(atob(MATRIX_TEMPLATE),function(c){return c.charCodeAt(0)});

    JSZip.loadAsync(templateBytes).then(function(xlsxZip){
      // Read the sheet XML
      return xlsxZip.file("xl/worksheets/sheet1.xml").async("string").then(function(sheetXml){
        // Read shared strings
        return xlsxZip.file("xl/sharedStrings.xml").async("string").then(function(ssXml){
          // Parse shared strings to get count
          var ssMatch=ssXml.match(/count="(\d+)"/);
          var ssUniqueMatch=ssXml.match(/uniqueCount="(\d+)"/);
          var currentCount=ssMatch?parseInt(ssMatch[1]):0;
          var currentUnique=ssUniqueMatch?parseInt(ssUniqueMatch[1]):0;

          // Collect new strings to add
          var newStrings=[];
          var cellUpdates=[]; // {row, col, stringIndex}

          project.controls.forEach(function(ctrl,idx){
            var excelRow=idx+2; // Row 1=header, Row 2=CT-001, etc.

            // Column U = compliance
            if(ctrl.compliance&&ctrl.compliance.trim()){
              var sIdx=currentUnique+newStrings.length;
              newStrings.push(ctrl.compliance);
              cellUpdates.push({row:excelRow,col:"U",sIdx:sIdx});
            }

            // Column V = evidence list
            var evs=project.evidences.filter(function(e){return e.controlId===ctrl.id});
            if(evs.length>0){
              var evText=evs.map(function(ev,ei){
                var fNames=ev.files&&ev.files.length>0?ev.files.map(function(f){return f.name}).join(", "):"";
                return "Ev"+(ei+1)+": "+ev.description+(fNames?" ["+fNames+"]":"");
              }).join("\n");
              var sIdx2=currentUnique+newStrings.length;
              newStrings.push(evText);
              cellUpdates.push({row:excelRow,col:"V",sIdx:sIdx2});
            }
          });

          // ── UPDATE SHARED STRINGS XML ──
          if(newStrings.length>0){
            var newCount=currentCount+newStrings.length;
            var newUnique=currentUnique+newStrings.length;
            ssXml=ssXml.replace(/count="\d+"/, 'count="'+newCount+'"');
            ssXml=ssXml.replace(/uniqueCount="\d+"/, 'uniqueCount="'+newUnique+'"');

            // Add new <si> elements before closing </sst>
            var newSiEntries=newStrings.map(function(str){
              var escaped=str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
              return '<si><t xml:space="preserve">'+escaped+'</t></si>';
            }).join("");
            ssXml=ssXml.replace("</sst>",newSiEntries+"</sst>");
          }

          // ── UPDATE SHEET XML - insert values into cells ──
          cellUpdates.forEach(function(upd){
            var cellRef=upd.col+upd.row;
            var replaced=false;

            // Try self-closing first: <c r="U2" s="26"/>
            var pat1='<c r="'+cellRef+'"';
            if(sheetXml.indexOf(pat1)>=0){
              // Find the full tag
              var idx=sheetXml.indexOf(pat1);
              var endSelf=sheetXml.indexOf("/>",idx);
              var endFull=sheetXml.indexOf("</c>",idx);

              if(endSelf>=0&&(endFull<0||endSelf<endFull)){
                // Self-closing tag
                var oldTag=sheetXml.substring(idx,endSelf+2);
                var styleMatch=oldTag.match(/s="(\d+)"/);
                var style=styleMatch?' s="'+styleMatch[1]+'"':'';
                var newTag='<c r="'+cellRef+'"'+style+' t="s"><v>'+upd.sIdx+'</v></c>';
                sheetXml=sheetXml.substring(0,idx)+newTag+sheetXml.substring(endSelf+2);
                replaced=true;
              }else if(endFull>=0){
                // Full tag with content
                var oldTag2=sheetXml.substring(idx,endFull+4);
                var styleMatch2=oldTag2.match(/s="(\d+)"/);
                var style2=styleMatch2?' s="'+styleMatch2[1]+'"':'';
                var newTag2='<c r="'+cellRef+'"'+style2+' t="s"><v>'+upd.sIdx+'</v></c>';
                sheetXml=sheetXml.substring(0,idx)+newTag2+sheetXml.substring(endFull+4);
                replaced=true;
              }
            }

            if(!replaced){
              // Cell doesn't exist - add to row
              var rowStart='<row r="'+upd.row+'"';
              var ri=sheetXml.indexOf(rowStart);
              if(ri>=0){
                var rowTagEnd=sheetXml.indexOf(">",ri);
                if(rowTagEnd>=0){
                  var insertPos=rowTagEnd+1;
                  sheetXml=sheetXml.substring(0,insertPos)+'<c r="'+cellRef+'" t="s"><v>'+upd.sIdx+'</v></c>'+sheetXml.substring(insertPos);
                }
              }
            }
          });

          // ── REBUILD THE XLSX ──
          xlsxZip.file("xl/worksheets/sheet1.xml",sheetXml);
          xlsxZip.file("xl/sharedStrings.xml",ssXml);

          return xlsxZip.generateAsync({type:"arraybuffer"});
        });
      });
    }).then(function(modifiedXlsx){
      // Add modified Excel to main ZIP
      mainZip.file("MATRIZ_"+project.name.replace(/[^a-zA-Z0-9]/g,"_")+".xlsx",modifiedXlsx);

      // ── ADD EVIDENCE FILES ──
      var evidenceFolder=mainZip.folder("Evidencias");
      project.controls.forEach(function(ctrl){
        var evs=project.evidences.filter(function(e){return e.controlId===ctrl.id});
        if(evs.length===0)return;
        var folderName=ctrl.code+"_"+ctrl.causaBase.replace(/[^a-zA-Z0-9 ]/g,"").substring(0,40).trim();
        var ctrlFolder=evidenceFolder.folder(folderName);
        evs.forEach(function(ev,ei){
          var meta="Control: "+ctrl.code+" - "+ctrl.causaBase+"\n";
          meta+="Evidencia: "+ev.description+"\n";
          meta+="Tipo: "+ev.type+"\n";
          meta+="Fecha: "+ev.date+"\n";
          meta+="Estado: "+ev.status+"\n";
          if(ev.reviewer)meta+="Revisor: "+ev.reviewer+"\n";
          if(ev.notes)meta+="Notas: "+ev.notes+"\n";
          ctrlFolder.file("Ev"+(ei+1)+"_info.txt",meta);
          if(ev.files&&ev.files.length>0){
            ev.files.forEach(function(f){
              try{var b64=f.data.split(",")[1];if(b64)ctrlFolder.file(f.name||"archivo",b64,{base64:true})}catch(err){}
            });
          }
        });
      });

      // ── DOWNLOAD ──
      return mainZip.generateAsync({type:"blob"});
    }).then(function(content){
      var a=document.createElement("a");
      a.href=URL.createObjectURL(content);
      a.download=project.name.replace(/[^a-zA-Z0-9]/g,"_")+"_Export.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    });
  }
  if(!ready)return h("div",{style:{fontFamily:"'DM Sans',sans-serif",background:T.bg,color:T.tx,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}},"Cargando...");

  var content=null;

  if(view==="projects"){

    var filteredProjects=projects.filter(function(p){
      if(projSearch&&(p.name+" "+p.responsible+" "+p.publishDate).toLowerCase().indexOf(projSearch.toLowerCase())<0)return false;
      if(projFilter==="complete"){var wc2=p.controls.filter(function(x){return x.compliance&&x.compliance.trim()}).length;return p.controls.length>0&&wc2===p.controls.length}
      if(projFilter==="pending"){var wc3=p.controls.filter(function(x){return x.compliance&&x.compliance.trim()}).length;return p.controls.length===0||wc3<p.controls.length}
      return true;
    });

    var totalProj=projects.length;
    var completeProj=projects.filter(function(p){var wc4=p.controls.filter(function(x){return x.compliance&&x.compliance.trim()}).length;return p.controls.length>0&&wc4===p.controls.length}).length;

    content=h("div",null,
      // User bar
      h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,padding:"10px 16px",background:T.sf,borderRadius:10,border:"1px solid "+T.bd}},
        h("div",{style:{display:"flex",alignItems:"center",gap:10}},
          h("div",{style:{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,"+T.ac+",#F59E0B)",display:"flex",alignItems:"center",justifyContent:"center",color:T.wh,fontWeight:800,fontSize:14}},session.name?session.name.charAt(0).toUpperCase():"U"),
          h("div",null,
            h("div",{style:{fontSize:13,fontWeight:700,color:T.tx}},session.name||session.username),
            h("div",{style:{fontSize:11,color:T.td}},(AUTH_ROLES[session.role]||{}).l||session.role)
          )
        ),
        h("div",{style:{display:"flex",gap:8,alignItems:"center"}},
          session.role==="admin"?h("button",{style:btnS("outline","sm"),onClick:function(){setView("admin")}},"⚙️ Usuarios"):null,
          h("button",{style:btnS("ghost","sm"),onClick:onLogout},"Cerrar sesión →")
        )
      ),
      // Header
      h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}},
        h("div",null,
          h("h1",{style:{margin:0,fontSize:28,fontWeight:900}},"Línea 1.5"),
          h("p",{style:{margin:"4px 0 0",fontSize:14,color:T.ts}},"Gestión de Riesgos Tecnológicos — Matriz de Controles y Evidencias")
        ),
        h("button",{style:btnS("primary","lg"),onClick:function(){setModal("add-project")}},"＋ Nuevo Proyecto")
      ),

      // Stats bar
      h("div",{style:{display:"flex",gap:12,marginBottom:16}},
        [{l:"Total",v:totalProj,c:T.ac},{l:"Completados",v:completeProj,c:T.sc},{l:"En curso",v:totalProj-completeProj,c:T.wn}].map(function(s){
          return h("div",{key:s.l,style:{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",background:T.sa,borderRadius:8,border:"1px solid "+T.bd}},
            h("span",{style:Object.assign({},mS,{fontSize:16,fontWeight:800,color:s.c})},s.v),
            h("span",{style:{fontSize:11,color:T.td}},s.l)
          );
        })
      ),

      // Search & filters
      h("div",{style:{display:"flex",gap:10,marginBottom:16,alignItems:"center"}},
        h("input",{style:Object.assign({},iS,{flex:1}),placeholder:"🔍 Buscar proyecto por nombre, responsable o fecha...",value:projSearch,onChange:function(e){setProjSearch(e.target.value)}}),
        h("div",{style:{display:"flex",gap:4}},
          [{k:"all",l:"Todos"},{k:"pending",l:"En curso"},{k:"complete",l:"Completados"}].map(function(f){
            return h("button",{key:f.k,onClick:function(){setProjFilter(f.k)},style:{padding:"8px 14px",borderRadius:8,border:"1px solid "+(projFilter===f.k?T.ac:T.bd),background:projFilter===f.k?T.as:"transparent",color:projFilter===f.k?T.ac:T.ts,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}},f.l);
          })
        )
      ),

      // Projects table/list
      h("div",{style:{display:"flex",flexDirection:"column",gap:6}},
        // Header row
        h("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 100px 80px 80px 80px 50px",gap:10,padding:"10px 16px",fontSize:10,fontWeight:700,color:T.td,textTransform:"uppercase",letterSpacing:"0.5px"}},
          h("span",null,"Proyecto"),
          h("span",null,"Responsable"),
          h("span",null,"Publicación"),
          h("span",{style:{textAlign:"center"}},"Controles"),
          h("span",{style:{textAlign:"center"}},"Evidencias"),
          h("span",{style:{textAlign:"center"}},"Avance"),
          h("span",null,"")
        ),
        // Project rows
        filteredProjects.map(function(p){
          var wc=p.controls.filter(function(x){return x.compliance&&x.compliance.trim()}).length;
          var pct=p.controls.length?Math.round(wc/p.controls.length*100):0;
          var evCount=p.evidences.length;
          return h("div",{key:p.id,style:{display:"grid",gridTemplateColumns:"2fr 1fr 100px 80px 80px 80px 50px",gap:10,padding:"14px 16px",background:T.sf,borderRadius:10,border:"1px solid "+T.bd,cursor:"pointer",alignItems:"center",transition:"all .15s"},
            onClick:function(){setPid(p.id);setView("dashboard")},
            onMouseEnter:function(e){e.currentTarget.style.borderColor=T.ac;e.currentTarget.style.background=T.sa},
            onMouseLeave:function(e){e.currentTarget.style.borderColor=T.bd;e.currentTarget.style.background=T.sf}
          },
            // Name
            h("div",null,
              h("div",{style:{fontSize:14,fontWeight:700,color:T.tx}},p.name),
              pct>=100?h("span",{style:bdg(T.sc,T.ss)},"✓ Completo"):null
            ),
            // Responsible
            h("div",{style:{fontSize:12,color:T.ts,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},p.responsible),
            // Date
            h("div",{style:{fontSize:12,color:T.td}},p.publishDate),
            // Controls
            h("div",{style:{textAlign:"center"}},
              h("span",{style:Object.assign({},mS,{fontSize:14,fontWeight:800,color:wc===p.controls.length&&p.controls.length>0?T.sc:T.tx})},wc+"/"+p.controls.length)
            ),
            // Evidences
            h("div",{style:{textAlign:"center"}},
              h("span",{style:Object.assign({},mS,{fontSize:14,fontWeight:800,color:evCount>0?T.inf:T.td})},evCount)
            ),
            // Progress
            h("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:3}},
              h("span",{style:Object.assign({},mS,{fontSize:13,fontWeight:800,color:pct>=100?T.sc:pct>=50?T.wn:T.ac})},pct+"%"),
              h("div",{style:{width:"100%",height:4,background:T.sa,borderRadius:2,overflow:"hidden"}},
                h("div",{style:{height:"100%",width:pct+"%",background:pct>=100?T.sc:pct>=50?T.wn:T.ac,borderRadius:2}})
              )
            ),
            // Actions
            h("div",{style:{textAlign:"center"}},
              h("button",{style:{background:"none",border:"none",color:T.td,cursor:"pointer",fontSize:14,padding:4},onClick:function(e){e.stopPropagation();if(confirm('¿Eliminar el proyecto "'+p.name+'"?'))delProject(p.id)}},"🗑")
            )
          );
        }),
        filteredProjects.length===0?h("div",{style:{textAlign:"center",padding:40,color:T.ts}},
          h("div",{style:{fontSize:32,marginBottom:8}},"🔍"),
          h("div",{style:{fontSize:14}},"No se encontraron proyectos"),
          projSearch?h("div",{style:{fontSize:12,color:T.td,marginTop:4}},"Intenta con otro término de búsqueda"):null
        ):null
      ),

      // Add project card at bottom
      h("div",{style:{marginTop:12,padding:"16px",border:"2px dashed "+T.bd,borderRadius:10,textAlign:"center",cursor:"pointer",opacity:.6,transition:"opacity .15s"},onClick:function(){setModal("add-project")},onMouseEnter:function(e){e.currentTarget.style.opacity=1},onMouseLeave:function(e){e.currentTarget.style.opacity=.6}},
        h("span",{style:{fontSize:13,fontWeight:600,color:T.ts}},"＋ Agregar nuevo proyecto")
      )
    );
  }

  if(view==="dashboard"&&proj){
    var tc=proj.controls.length;
    var wc=proj.controls.filter(function(x){return x.compliance&&x.compliance.trim()}).length;
    var pctCtrl=tc?Math.round(wc/tc*100):0;
    var te=proj.evidences.length;
    var eApproved=proj.evidences.filter(function(x){return x.status==="aprobada"}).length;
    var eReview=proj.evidences.filter(function(x){return x.status==="en_revision"}).length;
    var eRejected=proj.evidences.filter(function(x){return x.status==="rechazada"}).length;
    var pctEv=te?Math.round(eApproved/te*100):0;
    // Controls with at least one evidence
    var ctrlWithEv=proj.controls.filter(function(c){return proj.evidences.some(function(e){return e.controlId===c.id})}).length;
    var pctCoverage=tc?Math.round(ctrlWithEv/tc*100):0;
    // Controls fully done (compliance + approved evidence)
    var ctrlFull=proj.controls.filter(function(c){
      var hasComp=c.compliance&&c.compliance.trim();
      var hasApproved=proj.evidences.some(function(e){return e.controlId===c.id&&e.status==="aprobada"});
      return hasComp&&hasApproved;
    }).length;
    var pctFull=tc?Math.round(ctrlFull/tc*100):0;

    content=h("div",null,
      h("button",{style:btnS("ghost","sm"),onClick:function(){setView("projects");setPid(null)}},"← Proyectos"),
      h("div",{style:{margin:"12px 0 24px"}},h("h2",{style:{margin:0,fontSize:24,fontWeight:900}},proj.name),h("p",{style:{margin:"4px 0 0",fontSize:13,color:T.ts}},proj.responsible+" · "+proj.publishDate)),

      // ── KPI Cards ──
      h("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:20}},
        [{l:"Controles",v:tc,c:T.ac,i:"🛡"},{l:"Respondidos",v:wc+"/"+tc,c:pctCtrl>=100?T.sc:T.wn,i:"📝"},{l:"Evidencias",v:te,c:T.inf,i:"📎"},{l:"Aprobadas",v:eApproved+"/"+te,c:te&&pctEv>=100?T.sc:T.inf,i:"✓"}].map(function(k){
          return h("div",{key:k.l,style:Object.assign({},cS,{position:"relative",overflow:"hidden"})},
            h("div",{style:{position:"absolute",top:-4,right:-2,fontSize:36,opacity:.06}},k.i),
            h("div",{style:lS},k.l),
            h("div",{style:Object.assign({},mS,{fontSize:24,fontWeight:800,color:k.c,marginTop:4})},k.v)
          );
        })
      ),

      // ── Progress Bars Section ──
      h("div",{style:Object.assign({},cS,{marginBottom:20})},
        h("div",{style:{fontSize:15,fontWeight:800,marginBottom:16}},"Avance del Proyecto"),

        // 1. Cumplimiento de controles
        h("div",{style:{marginBottom:16}},
          h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},
            h("div",{style:{display:"flex",alignItems:"center",gap:8}},
              h("span",{style:{fontSize:16}},"📝"),
              h("span",{style:{fontSize:13,fontWeight:700}},"Controles respondidos")
            ),
            h("span",{style:Object.assign({},mS,{fontSize:16,fontWeight:800,color:pctCtrl>=100?T.sc:T.wn})},pctCtrl+"%")
          ),
          h("div",{style:{height:14,background:T.sa,borderRadius:7,overflow:"hidden"}},
            h("div",{style:{height:"100%",width:pctCtrl+"%",background:pctCtrl>=100?"linear-gradient(90deg,"+T.sc+",#34D399)":"linear-gradient(90deg,"+T.wn+",#FBBF24)",borderRadius:7,transition:"width .4s"}})
          ),
          h("div",{style:{fontSize:11,color:T.td,marginTop:4}},wc+" de "+tc+" controles tienen descripción de cumplimiento")
        ),

        // 2. Cobertura de evidencias
        h("div",{style:{marginBottom:16}},
          h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},
            h("div",{style:{display:"flex",alignItems:"center",gap:8}},
              h("span",{style:{fontSize:16}},"📎"),
              h("span",{style:{fontSize:13,fontWeight:700}},"Controles con evidencia")
            ),
            h("span",{style:Object.assign({},mS,{fontSize:16,fontWeight:800,color:pctCoverage>=100?T.sc:T.inf})},pctCoverage+"%")
          ),
          h("div",{style:{height:14,background:T.sa,borderRadius:7,overflow:"hidden"}},
            h("div",{style:{height:"100%",width:pctCoverage+"%",background:pctCoverage>=100?"linear-gradient(90deg,"+T.sc+",#34D399)":"linear-gradient(90deg,"+T.inf+",#60A5FA)",borderRadius:7,transition:"width .4s"}})
          ),
          h("div",{style:{fontSize:11,color:T.td,marginTop:4}},ctrlWithEv+" de "+tc+" controles tienen al menos una evidencia adjunta")
        ),

        // 3. Evidencias aprobadas
        h("div",{style:{marginBottom:16}},
          h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},
            h("div",{style:{display:"flex",alignItems:"center",gap:8}},
              h("span",{style:{fontSize:16}},"✅"),
              h("span",{style:{fontSize:13,fontWeight:700}},"Evidencias aprobadas")
            ),
            h("span",{style:Object.assign({},mS,{fontSize:16,fontWeight:800,color:pctEv>=100?T.sc:T.ac})},pctEv+"%")
          ),
          h("div",{style:{height:14,background:T.sa,borderRadius:7,overflow:"hidden"}},
            h("div",{style:{height:"100%",width:pctEv+"%",background:pctEv>=100?"linear-gradient(90deg,"+T.sc+",#34D399)":"linear-gradient(90deg,"+T.ac+","+T.ah+")",borderRadius:7,transition:"width .4s"}})
          ),
          h("div",{style:{display:"flex",gap:12,fontSize:11,color:T.td,marginTop:4}},
            h("span",null,eApproved+" aprobadas"),
            eReview>0?h("span",{style:{color:T.wn}},eReview+" en revisión"):null,
            eRejected>0?h("span",{style:{color:T.dn}},eRejected+" rechazadas"):null
          )
        ),

        // 4. Completitud total (compliance + evidencia aprobada)
        h("div",null,
          h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},
            h("div",{style:{display:"flex",alignItems:"center",gap:8}},
              h("span",{style:{fontSize:16}},"🏆"),
              h("span",{style:{fontSize:13,fontWeight:700}},"Controles 100% completados"),
              h("span",{style:{fontSize:10,color:T.td}},"(respuesta + evidencia aprobada)")
            ),
            h("span",{style:Object.assign({},mS,{fontSize:16,fontWeight:800,color:pctFull>=100?T.sc:T.ac})},pctFull+"%")
          ),
          h("div",{style:{height:14,background:T.sa,borderRadius:7,overflow:"hidden"}},
            h("div",{style:{height:"100%",width:pctFull+"%",background:pctFull>=100?"linear-gradient(90deg,#10B981,#34D399)":"linear-gradient(90deg,"+T.ac+",#F59E0B)",borderRadius:7,transition:"width .4s"}})
          ),
          h("div",{style:{fontSize:11,color:T.td,marginTop:4}},ctrlFull+" de "+tc+" controles tienen cumplimiento documentado y evidencia aprobada")
        ),

        // ── AVANCE TOTAL DE LA MATRIZ ──
        h("div",{style:{marginTop:24,padding:"20px 24px",background:"linear-gradient(135deg,"+T.ac+"15,#F59E0B15)",borderRadius:14,border:"1px solid "+T.ac+"33"}},
          h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}},
            h("div",{style:{display:"flex",alignItems:"center",gap:10}},
              h("span",{style:{fontSize:24}},"📊"),
              h("span",{style:{fontSize:16,fontWeight:800,color:T.tx}},"AVANCE TOTAL DE LA MATRIZ")
            ),
            h("span",{style:Object.assign({},mS,{fontSize:28,fontWeight:800,color:(function(){var avg=Math.round((pctCtrl+pctCoverage+pctFull)/3);return avg>=80?T.sc:avg>=50?T.wn:T.ac})()})},Math.round((pctCtrl+pctCoverage+pctFull)/3)+"%")
          ),
          h("div",{style:{height:20,background:T.sa,borderRadius:10,overflow:"hidden",marginBottom:12}},
            h("div",{style:{height:"100%",width:Math.round((pctCtrl+pctCoverage+pctFull)/3)+"%",background:(function(){var avg=Math.round((pctCtrl+pctCoverage+pctFull)/3);return avg>=80?"linear-gradient(90deg,#10B981,#34D399)":avg>=50?"linear-gradient(90deg,"+T.wn+",#FBBF24)":"linear-gradient(90deg,"+T.ac+",#F59E0B)"})(),borderRadius:10,transition:"width .5s ease"}})
          ),
          h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}},
            [{l:"Controles",v:pctCtrl,c:pctCtrl>=100?T.sc:T.wn,i:"📝"},{l:"Cobertura Ev.",v:pctCoverage,c:pctCoverage>=100?T.sc:T.inf,i:"📎"},{l:"Completitud",v:pctFull,c:pctFull>=100?T.sc:T.ac,i:"🏆"}].map(function(item){
              return h("div",{key:item.l,style:{textAlign:"center",padding:"8px 4px",background:T.sa,borderRadius:8}},
                h("div",{style:{fontSize:14}},item.i),
                h("div",{style:Object.assign({},mS,{fontSize:16,fontWeight:800,color:item.c,marginTop:2})},item.v+"%"),
                h("div",{style:{fontSize:9,color:T.td,marginTop:2}},item.l)
              );
            })
          )
        )
      ),

      // ── Action buttons ──
      h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:12,marginBottom:20}},
        h("div",{style:Object.assign({},cS,{cursor:"pointer",textAlign:"center",padding:"24px 16px",border:"2px solid "+T.wn+"55"}),onClick:function(){setView("wizard")}},
          h("div",{style:{fontSize:32,marginBottom:6}},"📝"),h("h3",{style:{margin:0,fontSize:14,fontWeight:800,color:T.wn}},"Llenar Controles"),
          h("div",{style:{marginTop:8}},h("span",{style:bdg(T.wn,T.ws)},(tc-wc)+" pendientes"))
        ),
        h("div",{style:Object.assign({},cS,{cursor:"pointer",textAlign:"center",padding:"24px 16px",border:"2px solid "+T.sc+"55"}),onClick:function(){setView("add-ev")}},
          h("div",{style:{fontSize:32,marginBottom:6}},"📎"),h("h3",{style:{margin:0,fontSize:14,fontWeight:800,color:T.sc}},"Agregar Evidencias"),
          h("div",{style:{marginTop:8}},h("span",{style:bdg(T.sc,T.ss)},te+" registradas"))
        ),
        h("div",{style:Object.assign({},cS,{cursor:"pointer",textAlign:"center",padding:"24px 16px",border:"2px solid "+(eReview>0?T.wn:T.ac)+"55"}),onClick:function(){setView("evidences")}},
          h("div",{style:{fontSize:32,marginBottom:6}},"✅"),h("h3",{style:{margin:0,fontSize:14,fontWeight:800,color:eReview>0?T.wn:T.ac}},"Aprobar Evidencias"),
          h("div",{style:{marginTop:8}},eReview>0?h("span",{style:bdg(T.wn,T.ws)},eReview+" por revisar"):h("span",{style:bdg(T.sc,T.ss)},"Todo al día"))
        ),
        h("div",{style:Object.assign({},cS,{cursor:"pointer",textAlign:"center",padding:"24px 16px",border:"2px solid "+T.inf+"55"}),onClick:function(){exportProject(proj)}},
          h("div",{style:{fontSize:32,marginBottom:6}},"📥"),h("h3",{style:{margin:0,fontSize:14,fontWeight:800,color:T.inf}},"Exportar Matriz"),
          h("div",{style:{marginTop:8}},h("span",{style:bdg(T.inf,T.inf+"18")},"Excel + Evidencias"))
        )
      ),

      // ── Detail per control ──
      h("div",{style:cS},
        h("div",{style:{fontSize:15,fontWeight:800,marginBottom:14}},"Detalle por Control"),
        h("div",{style:{display:"flex",gap:16,marginBottom:14,fontSize:11,color:T.td}},
          h("span",{style:{display:"flex",alignItems:"center",gap:4}},h("span",{style:{width:10,height:10,borderRadius:2,background:T.sc}})," Completo"),
          h("span",{style:{display:"flex",alignItems:"center",gap:4}},h("span",{style:{width:10,height:10,borderRadius:2,background:T.wn}})," Solo cumplimiento"),
          h("span",{style:{display:"flex",alignItems:"center",gap:4}},h("span",{style:{width:10,height:10,borderRadius:2,background:T.inf}})," Solo evidencia"),
          h("span",{style:{display:"flex",alignItems:"center",gap:4}},h("span",{style:{width:10,height:10,borderRadius:2,background:T.sa}})," Pendiente")
        ),
        proj.controls.map(function(c){
          var hasComp=c.compliance&&c.compliance.trim();
          var evs=proj.evidences.filter(function(e){return e.controlId===c.id});
          var hasEv=evs.length>0;
          var hasApproved=evs.some(function(e){return e.status==="aprobada"});
          var full=hasComp&&hasApproved;
          var barColor=full?T.sc:hasComp&&hasEv?T.wn:hasComp?T.wn:hasEv?T.inf:T.sa;
          var barPct=full?100:hasComp&&hasEv?75:hasComp||hasEv?50:0;
          return h("div",{key:c.id,style:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid "+T.bd}},
            h("span",{style:Object.assign({},mS,{fontSize:10,color:T.td,width:50,flexShrink:0})},c.code),
            h("div",{style:{flex:1,minWidth:0}},
              h("div",{style:{fontSize:12,fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},c.causaBase),
              h("div",{style:{height:6,background:T.sa,borderRadius:3,overflow:"hidden",marginTop:4}},
                h("div",{style:{height:"100%",width:barPct+"%",background:barColor,borderRadius:3}})
              )
            ),
            h("div",{style:{display:"flex",gap:6,flexShrink:0}},
              hasComp?h("span",{style:{fontSize:10,color:T.sc}},"📝"):h("span",{style:{fontSize:10,color:T.td}},"📝"),
              hasEv?h("span",{style:{fontSize:10,color:hasApproved?T.sc:T.wn}},"📎"+evs.length):h("span",{style:{fontSize:10,color:T.td}},"📎0")
            )
          );
        })
      ),

      // ── Recent evidences ──
      proj.evidences.length>0?h("div",{style:Object.assign({},cS,{marginTop:16})},
        h("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12}},h("span",{style:{fontSize:14,fontWeight:700}},"Últimas evidencias"),h("button",{style:btnS("ghost","sm"),onClick:function(){setView("evidences")}},"Ver todas →")),
        proj.evidences.slice(-3).reverse().map(function(ev){var ct=proj.controls.find(function(c){return c.id===ev.controlId});return h("div",{key:ev.id,style:{padding:"8px 0",borderBottom:"1px solid "+T.bd,display:"flex",justifyContent:"space-between",alignItems:"center"}},
          h("div",null,h("div",{style:{fontSize:12,fontWeight:600}},ev.description),h("div",{style:{fontSize:10,color:T.td,marginTop:2}},ct?ct.code+" — "+ct.causaBase:"")),
          h(EvBdg,{status:ev.status})
        )})
      ):null
    );
  }

  if(view==="wizard"&&proj)content=h(Questionnaire,{proj:proj,onSave:setComp,onFinish:function(){setView("dashboard")}});
  if(view==="add-ev"&&proj)content=h(EvidenceFlow,{proj:proj,onSave:addEv,onBack:function(){setView("dashboard")}});

  if(view==="evidences"&&proj){

    content=h("div",null,
      h("button",{style:btnS("ghost","sm"),onClick:function(){setView("dashboard")}},"← Dashboard"),
      h("h2",{style:{margin:"12px 0 16px",fontSize:22,fontWeight:800}},"Historial de Evidencias"),
      h("div",{style:{display:"flex",gap:8,marginBottom:16}},
        [{k:"all",l:"Todas",n:proj.evidences.length}].concat(Object.entries(EV_ST).map(function(e){return{k:e[0],l:e[1].l,n:proj.evidences.filter(function(ev){return ev.status===e[0]}).length}})).map(function(f){
          return h("button",{key:f.k,onClick:function(){setFStatus(f.k)},style:{padding:"6px 14px",borderRadius:20,border:"1px solid "+(fStatus===f.k?T.ac:T.bd),background:fStatus===f.k?T.as:"transparent",color:fStatus===f.k?T.ac:T.ts,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}},f.l+" ("+f.n+")");
        })
      ),
      proj.evidences.filter(function(e){return fStatus==="all"||e.status===fStatus}).map(function(ev){
        var ct=proj.controls.find(function(c){return c.id===ev.controlId});
        return h("div",{key:ev.id,style:Object.assign({},cS,{marginBottom:12})},
          // Header row
          h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}},
            h("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}},
              h(EvBdg,{status:ev.status}),
              ct?h("span",{style:{fontSize:11,color:T.ac,fontWeight:600}},ct.code+" — "+ct.causaBase):null,
              h("span",{style:{fontSize:10,color:T.td,background:T.sa,padding:"2px 6px",borderRadius:3}},ev.type)
            ),
            ev.status==="en_revision"?h("div",{style:{display:"flex",gap:6}},
              h("button",{style:Object.assign({},btnS("success"),{padding:"8px 16px"}),onClick:function(){setEvSt(ev.id,"aprobada")}},"✓ Aprobar"),
              h("button",{style:Object.assign({},btnS("danger"),{padding:"8px 16px"}),onClick:function(){setEvSt(ev.id,"rechazada")}},"✕ Rechazar")
            ):null,
            h("div",{style:{display:"flex",gap:6,marginLeft:ev.status==="en_revision"?8:0}},
              h("button",{style:btnS("outline","sm"),onClick:function(){setModal("edit-ev");setEditEv(ev)}},"✏️ Editar"),
              h("button",{style:btnS("danger","sm"),onClick:function(){delEv(ev.id)}},"🗑 Eliminar")
            )
          ),
          // Description
          h("div",{style:{fontSize:14,fontWeight:600,marginBottom:4}},ev.description),
          h("div",{style:{fontSize:11,color:T.td,marginBottom:8}},"Fecha: "+ev.date+(ev.reviewer?" · Revisó: "+ev.reviewer:"")),
          // Files with preview
          ev.files&&ev.files.length>0?h("div",{style:{borderTop:"1px solid "+T.bd,paddingTop:12}},
            h("div",{style:{fontSize:11,fontWeight:700,color:T.td,textTransform:"uppercase",marginBottom:8}},"Archivos adjuntos ("+ev.files.length+"):"),
            h("div",{style:{display:"flex",flexDirection:"column",gap:10}},
              ev.files.map(function(f,fi){
                var ext=(f.name||"").split(".").pop().toLowerCase();
                var isImg=["jpg","jpeg","png","gif","webp","bmp"].indexOf(ext)>=0;
                var isPdf=ext==="pdf";
                var icon=isPdf?"📄":isImg?"🖼️":["doc","docx"].indexOf(ext)>=0?"📝":["xls","xlsx"].indexOf(ext)>=0?"📊":"📎";
                var sizeStr=f.size<1024?f.size+" B":f.size<1048576?(f.size/1024).toFixed(1)+" KB":(f.size/1048576).toFixed(1)+" MB";
                var thisFileKey=ev.id+"-"+fi;
                var isOpen=preview===thisFileKey;

                return h("div",{key:fi,style:{background:T.sa,borderRadius:10,border:"1px solid "+T.bd,overflow:"hidden"}},
                  // File info bar
                  h("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px"}},
                    h("span",{style:{fontSize:24}},icon),
                    h("div",{style:{flex:1,minWidth:0}},
                      h("div",{style:{fontSize:13,fontWeight:600,color:T.tx}},f.name),
                      h("div",{style:{fontSize:10,color:T.td,marginTop:1}},sizeStr)
                    ),
                    h("button",{onClick:function(){setPreview(isOpen?null:thisFileKey)},style:btnS(isOpen?"primary":"outline","sm")},isOpen?"✕ Cerrar":"👁 Ver"),
                    h("a",{href:f.data,download:f.name,target:"_blank",rel:"noopener",style:Object.assign({},btnS("outline","sm"),{textDecoration:"none",color:T.ac,cursor:"pointer"})},"⬇ Descargar")
                  ),
                  // Image thumbnail when closed
                  isImg&&!isOpen?h("div",{style:{padding:"0 14px 10px"}},
                    h("img",{src:f.data,onClick:function(){setPreview(thisFileKey)},style:{height:60,borderRadius:6,objectFit:"cover",cursor:"pointer",border:"1px solid "+T.bd}})
                  ):null,
                  // Zoomable image viewer
                  isImg&&isOpen?h(ZoomViewer,{src:f.data}):null,
                  // PDF preview
                  isPdf&&isOpen?h("div",{style:{padding:"8px 14px 14px"}},
                    h("iframe",{src:f.data,style:{width:"100%",height:600,border:"none",borderRadius:8,background:"#fff"}})
                  ):null,
                  // Other file types
                  !isImg&&!isPdf&&isOpen?h("div",{style:{padding:"14px",textAlign:"center"}},
                    h("div",{style:{padding:"24px",background:T.bg,borderRadius:10,border:"1px solid "+T.bd}},
                      h("div",{style:{fontSize:48,marginBottom:10}},icon),
                      h("div",{style:{fontSize:14,fontWeight:700,color:T.tx}},f.name),
                      h("div",{style:{fontSize:12,color:T.ts,margin:"6px 0 14px"}},"Este tipo de archivo no se puede previsualizar en el navegador"),
                      h("a",{href:f.data,download:f.name,target:"_blank",rel:"noopener",style:Object.assign({},btnS("primary"),{textDecoration:"none",display:"inline-flex"})},"⬇ Descargar para ver")
                    )
                  ):null
                );
              })
            )
          ):h("div",{style:{fontSize:12,color:T.td,fontStyle:"italic"}},"Sin archivos adjuntos")
        );
      }),
      proj.evidences.length===0?h("div",{style:{textAlign:"center",padding:40}},h("div",{style:{fontSize:40}},"📋"),h("p",{style:{color:T.ts}},"Sin evidencias")):null
    );
  }

  // ═══ ADMIN - USER MANAGEMENT ═══
  if(view==="admin"&&session.role==="admin"){

    var filteredUsers=(users||[]).filter(function(u){return !adminSearch||(u.username+" "+u.name+" "+u.email+" "+u.role).toLowerCase().indexOf(adminSearch.toLowerCase())>=0});

    function createUser(){
      if(!newUser||!newName||!newPw)return;
      if(users.some(function(u){return u.username===newUser})){alert("El usuario ya existe");return}
      var nu={id:uid(),username:newUser,name:newName,email:newEmail,role:newRole,password:newPw,active:true,createdAt:today(),projectPerms:{}};
      setUsers(function(prev){return prev.concat([nu])});
      setNewUser("");setNewName("");setNewEmail("");setNewRole("lider");setNewPw("");setAdminModal(null);
    }
    function toggleUser(id){setUsers(function(prev){return prev.map(function(u){return u.id===id?Object.assign({},u,{active:!u.active}):u})})}
    function deleteUser(id){if(!confirm("¿Eliminar este usuario?"))return;setUsers(function(prev){return prev.filter(function(u){return u.id!==id})})}
    function updateUserField(id,field,value){setUsers(function(prev){return prev.map(function(u){return u.id===id?Object.assign({},u,Object.fromEntries([[field,value]])):u})})}
    function setProjectPerm(userId,projectId,perm){
      setUsers(function(prev){return prev.map(function(u){
        if(u.id!==userId)return u;
        var perms=Object.assign({},u.projectPerms||{});
        if(perm==="none"){delete perms[projectId]}else{perms[projectId]=perm}
        return Object.assign({},u,{projectPerms:perms});
      })});
    }

    content=h("div",null,
      h("button",{style:btnS("ghost","sm"),onClick:function(){setView("projects")}},"← Proyectos"),
      h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"12px 0 20px"}},
        h("div",null,
          h("h2",{style:{margin:0,fontSize:24,fontWeight:900}},"⚙️ Administración de Usuarios"),
          h("p",{style:{margin:"4px 0 0",fontSize:13,color:T.ts}},"Crear, editar y asignar permisos por proyecto")
        ),
        h("button",{style:btnS("primary"),onClick:function(){setAdminModal("create")}},"＋ Nuevo Usuario")
      ),

      // Stats
      h("div",{style:{display:"flex",gap:12,marginBottom:16}},
        [{l:"Total",v:(users||[]).length,c:T.ac},{l:"Activos",v:(users||[]).filter(function(u){return u.active}).length,c:T.sc},{l:"Inactivos",v:(users||[]).filter(function(u){return!u.active}).length,c:T.dn}].map(function(s){
          return h("div",{key:s.l,style:{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",background:T.sa,borderRadius:8,border:"1px solid "+T.bd}},
            h("span",{style:Object.assign({},mS,{fontSize:16,fontWeight:800,color:s.c})},s.v),
            h("span",{style:{fontSize:11,color:T.td}},s.l)
          );
        })
      ),

      // Search
      h("input",{style:Object.assign({},iS,{marginBottom:16}),placeholder:"🔍 Buscar usuario...",value:adminSearch,onChange:function(e){setAdminSearch(e.target.value)}}),

      // Users table
      h("div",{style:{display:"flex",flexDirection:"column",gap:6}},
        // Header
        h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 120px 100px 120px",gap:10,padding:"8px 16px",fontSize:10,fontWeight:700,color:T.td,textTransform:"uppercase"}},
          h("span",null,"Usuario"),
          h("span",null,"Correo"),
          h("span",null,"Rol"),
          h("span",{style:{textAlign:"center"}},"Estado"),
          h("span",{style:{textAlign:"center"}},"Acciones")
        ),
        // Rows
        filteredUsers.map(function(u){
          var roleInfo=AUTH_ROLES[u.role]||{l:u.role};
          var projCount=u.projectPerms?Object.keys(u.projectPerms).length:0;
          return h("div",{key:u.id,style:{background:T.sf,borderRadius:10,border:"1px solid "+T.bd,padding:"12px 16px",opacity:u.active?1:.5}},
            h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 120px 100px 120px",gap:10,alignItems:"center"}},
              // User info
              h("div",{style:{display:"flex",alignItems:"center",gap:10}},
                h("div",{style:{width:32,height:32,borderRadius:"50%",background:u.active?"linear-gradient(135deg,"+T.ac+",#F59E0B)":T.sa,display:"flex",alignItems:"center",justifyContent:"center",color:T.wh,fontWeight:800,fontSize:12}},u.name?u.name.charAt(0).toUpperCase():"U"),
                h("div",null,
                  h("div",{style:{fontSize:13,fontWeight:700}},u.name),
                  h("div",{style:{fontSize:10,color:T.td}},"@"+u.username)
                )
              ),
              // Email
              h("div",{style:{fontSize:12,color:T.ts}},u.email||"—"),
              // Role
              h("div",null,h("span",{style:bdg(T.ac,T.as)},roleInfo.l)),
              // Status
              h("div",{style:{textAlign:"center"}},
                h("button",{style:Object.assign({},btnS(u.active?"success":"danger","sm"),{width:"100%",justifyContent:"center"}),onClick:function(){toggleUser(u.id)}},u.active?"✓ Activo":"✕ Inactivo")
              ),
              // Actions
              h("div",{style:{display:"flex",gap:4,justifyContent:"center"}},
                h("button",{style:btnS("outline","sm"),onClick:function(){setPermUser(u);setAdminModal("perms")}},"🔑"),
                h("button",{style:btnS("outline","sm"),onClick:function(){setEditingUser(u);setAdminModal("edit")}},"✏️"),
                u.id!=="admin"?h("button",{style:btnS("danger","sm"),onClick:function(){deleteUser(u.id)}},"🗑"):null
              )
            ),
            // Project permissions summary
            projCount>0?h("div",{style:{marginTop:8,paddingTop:8,borderTop:"1px solid "+T.bd,display:"flex",gap:6,flexWrap:"wrap"}},
              h("span",{style:{fontSize:10,color:T.td}},"Proyectos asignados:"),
              Object.entries(u.projectPerms||{}).map(function(entry){
                var projName=projects?projects.find(function(p){return p.id===entry[0]}):null;
                var permLabel={full:"Completo",fill:"Solo llenar",evidence:"Solo evidencias",view:"Solo ver"}[entry[1]]||entry[1];
                return h("span",{key:entry[0],style:bdg(T.inf,T.inf+"18")},(projName?projName.name.substring(0,15):entry[0])+" → "+permLabel);
              })
            ):null
          );
        })
      ),

      // Create user modal
      adminModal==="create"?h(Mdl,{title:"Crear Nuevo Usuario",onClose:function(){setAdminModal(null)}},
        h(Fld,{label:"Nombre de usuario"},h("input",{style:iS,value:newUser,onChange:function(e){setNewUser(e.target.value)},placeholder:"Ej: jperez"})),
        h(Fld,{label:"Nombre completo"},h("input",{style:iS,value:newName,onChange:function(e){setNewName(e.target.value)},placeholder:"Ej: Juan Pérez"})),
        h(Fld,{label:"Correo electrónico"},h("input",{style:iS,value:newEmail,onChange:function(e){setNewEmail(e.target.value)},placeholder:"Ej: jperez@empresa.com"})),
        h(Fld,{label:"Rol"},h("select",{style:Object.assign({},sS,{width:"100%"}),value:newRole,onChange:function(e){setNewRole(e.target.value)}},
          Object.entries(AUTH_ROLES).map(function(entry){return h("option",{key:entry[0],value:entry[0]},entry[1].l)})
        )),
        h(Fld,{label:"Contraseña"},h("input",{type:"password",style:iS,value:newPw,onChange:function(e){setNewPw(e.target.value)},placeholder:"Mínimo 6 caracteres"})),
        h("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:20}},
          h("button",{style:btnS("outline"),onClick:function(){setAdminModal(null)}},"Cancelar"),
          h("button",{style:btnS("primary"),disabled:!newUser||!newName||!newPw,onClick:createUser},"Crear Usuario")
        )
      ):null,

      // Edit user modal
      adminModal==="edit"&&editingUser?h(Mdl,{title:"Editar Usuario: "+editingUser.name,onClose:function(){setAdminModal(null);setEditingUser(null)}},
        h(Fld,{label:"Nombre completo"},h("input",{style:iS,value:editingUser.name,onChange:function(e){var v=e.target.value;setEditingUser(function(prev){return Object.assign({},prev,{name:v})})}})),
        h(Fld,{label:"Correo electrónico"},h("input",{style:iS,value:editingUser.email||"",onChange:function(e){var v=e.target.value;setEditingUser(function(prev){return Object.assign({},prev,{email:v})})}})),
        h(Fld,{label:"Rol"},h("select",{style:Object.assign({},sS,{width:"100%"}),value:editingUser.role,onChange:function(e){var v=e.target.value;setEditingUser(function(prev){return Object.assign({},prev,{role:v})})}},
          Object.entries(AUTH_ROLES).map(function(entry){return h("option",{key:entry[0],value:entry[0]},entry[1].l)})
        )),
        h(Fld,{label:"Nueva contraseña (dejar vacío para no cambiar)"},h("input",{type:"password",style:iS,placeholder:"••••••••",onChange:function(e){var v=e.target.value;if(v)setEditingUser(function(prev){return Object.assign({},prev,{password:v})})}})),
        h("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:20}},
          h("button",{style:btnS("outline"),onClick:function(){setAdminModal(null);setEditingUser(null)}},"Cancelar"),
          h("button",{style:btnS("primary"),onClick:function(){
            setUsers(function(prev){return prev.map(function(u){return u.id===editingUser.id?editingUser:u})});
            setAdminModal(null);setEditingUser(null);
          }},"💾 Guardar Cambios")
        )
      ):null,

      // Project permissions modal
      adminModal==="perms"&&permUser?h(Mdl,{title:"Permisos de: "+permUser.name,onClose:function(){setAdminModal(null);setPermUser(null)}},
        h("div",{style:{marginBottom:16}},
          h("div",{style:{fontSize:13,color:T.ts,marginBottom:4}},"Asigna el nivel de acceso para cada proyecto:"),
          h("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}},
            h("span",{style:bdg(T.sc,T.ss)},"Completo = todo"),
            h("span",{style:bdg(T.wn,T.ws)},"Llenar = solo controles"),
            h("span",{style:bdg(T.inf,T.inf+"18")},"Evidencias = solo evidencias"),
            h("span",{style:bdg(T.td,T.sa)},"Ver = solo lectura")
          )
        ),
        h("div",{style:{display:"flex",flexDirection:"column",gap:8}},
          (projects||[]).map(function(p){
            var currentPerm=(permUser.projectPerms||{})[p.id]||"none";
            return h("div",{key:p.id,style:{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",background:T.sa,borderRadius:8,border:"1px solid "+T.bd}},
              h("div",{style:{flex:1,minWidth:0}},
                h("div",{style:{fontSize:13,fontWeight:700,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},p.name),
                h("div",{style:{fontSize:10,color:T.td}},p.responsible)
              ),
              h("select",{style:Object.assign({},sS,{width:160}),value:currentPerm,onChange:function(e){setProjectPerm(permUser.id,p.id,e.target.value);setPermUser(function(prev){var perms=Object.assign({},prev.projectPerms||{});if(e.target.value==="none"){delete perms[p.id]}else{perms[p.id]=e.target.value}return Object.assign({},prev,{projectPerms:perms})})}},
                h("option",{value:"none"},"❌ Sin acceso"),
                h("option",{value:"full"},"✅ Completo"),
                h("option",{value:"fill"},"📝 Solo llenar controles"),
                h("option",{value:"evidence"},"📎 Solo evidencias"),
                h("option",{value:"view"},"👁 Solo ver")
              )
            );
          })
        ),
        h("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:20}},
          h("button",{style:btnS("primary"),onClick:function(){setAdminModal(null);setPermUser(null)}},"✓ Listo")
        )
      ):null
    );
  }

  var projModal=null;
  if(modal==="add-project"){
    projModal=h(Mdl,{title:"Nuevo Proyecto",onClose:function(){setModal(null)}},
      h(Fld,{label:"Nombre del proyecto"},h("input",{style:iS,value:pn,onChange:function(e){sPn(e.target.value)},placeholder:"Ej: Migración Cloud"})),
      h(Fld,{label:"Fecha de publicación"},h("input",{type:"date",style:Object.assign({},iS,{colorScheme:"light"}),value:pdt||today(),onChange:function(e){sPd(e.target.value)},onClick:function(e){try{e.target.showPicker()}catch(err){}}})),
      h(Fld,{label:"Responsable"},h("input",{style:iS,value:prsp,onChange:function(e){sPr(e.target.value)},placeholder:"Ej: Líder Técnico del Proyecto"})),
      h("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:20}},h("button",{style:btnS("outline"),onClick:function(){setModal(null)}},"Cancelar"),h("button",{style:btnS("primary"),disabled:!pn||!prsp,onClick:addProject},"Crear Proyecto"))
    );
  }

  var editEvModal=null;
  if(modal==="edit-ev"&&editEv){
    editEvModal=h(EditEvModal,{ev:editEv,onSave:function(data){updateEv(editEv.id,data);setModal(null);setEditEv(null)},onClose:function(){setModal(null);setEditEv(null)}});
  }

  return h("div",{style:{fontFamily:"'DM Sans',sans-serif",background:T.bg,color:T.tx,minHeight:"100vh"}},
    h("link",{href:"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap",rel:"stylesheet"}),
    h("main",{style:{maxWidth:1100,margin:"0 auto",padding:"20px 24px"}},content),
    projModal,
    editEvModal
  );
}
