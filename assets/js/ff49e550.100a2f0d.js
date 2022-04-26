"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[14620],{28128:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var a=i(83117),r=i(80102),n=(i(67294),i(3905)),o=["components"],l={description:"In this tutorial you will utilize the WASM binding of the IOTA Identity framework to digitally prove the existence and validity of a degree.",image:"/img/identity_tutorial_chart.png",keywords:["wasm","decentralized identifiers","did subject","Verifiable credentials","Verifiable Presentations","validate","degree","university"]},s=void 0,d={unversionedId:"tutorials/validate_university_degree",id:"tutorials/validate_university_degree",title:"validate_university_degree",description:"In this tutorial you will utilize the WASM binding of the IOTA Identity framework to digitally prove the existence and validity of a degree.",source:"@site/external/identity.rs/documentation/docs/tutorials/validate_university_degree.mdx",sourceDirName:"tutorials",slug:"/tutorials/validate_university_degree",permalink:"/identity.rs/tutorials/validate_university_degree",editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/external/identity.rs/documentation/docs/tutorials/validate_university_degree.mdx",tags:[],version:"current",frontMatter:{description:"In this tutorial you will utilize the WASM binding of the IOTA Identity framework to digitally prove the existence and validity of a degree.",image:"/img/identity_tutorial_chart.png",keywords:["wasm","decentralized identifiers","did subject","Verifiable credentials","Verifiable Presentations","validate","degree","university"]},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/identity.rs/libraries/wasm/troubleshooting"},next:{title:"Overview",permalink:"/identity.rs/specs/did/overview"}},c={},h=[{value:"Roles",id:"roles",level:2},{value:"Terms",id:"terms",level:2},{value:"Flow-Chart",id:"flow-chart",level:2},{value:"Key Storage",id:"key-storage",level:2},{value:"Example Weakhold file:",id:"example-weakhold-file",level:3},{value:"Steps",id:"steps",level:2},{value:"1. <strong>Holder</strong>: Create a DID.",id:"1-holder-create-a-did",level:3},{value:"2. <strong>Issuer</strong>: Create a DID",id:"2-issuer-create-a-did",level:3},{value:"3. <strong>Issuer</strong>: Add a Verification Method",id:"3-issuer-add-a-verification-method",level:3},{value:"4. <strong>Holder</strong>: Add a Verification Method",id:"4-holder-add-a-verification-method",level:3},{value:"6. <strong>Issuer</strong>: Sign the Document",id:"6-issuer-sign-the-document",level:3},{value:"7. <strong>Holder</strong>: Verify the Credentials",id:"7-holder-verify-the-credentials",level:3},{value:"8. <strong>Holder</strong>: Sign a Verifiable Credential",id:"8-holder-sign-a-verifiable-credential",level:3},{value:"9. <strong>Verifier</strong>: Verify Alice&#39;s and the University&#39;s Signatures",id:"9-verifier-verify-alices-and-the-universitys-signatures",level:3},{value:"10. <strong>Issuer</strong>: Revoke the Verification for Alice&#39;s Credential.",id:"10-issuer-revoke-the-verification-for-alices-credential",level:3},{value:"1. Remove the whole verification method",id:"1-remove-the-whole-verification-method",level:4},{value:"2. Only revoke the one Merkle key used for the signature.",id:"2-only-revoke-the-one-merkle-key-used-for-the-signature",level:4},{value:"11. <strong>Verifier</strong>: Verify Signatures Again",id:"11-verifier-verify-signatures-again",level:3}],u={toc:h};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"TODO: update this tutorial to remove references to ",(0,n.kt)("inlineCode",{parentName:"p"},"MerkleKeyCollection")," and instead use ",(0,n.kt)("inlineCode",{parentName:"p"},"credentialStatus")," with e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationList2020"),"."),(0,n.kt)("h1",{id:"digitally-validate-a-degree"},"Digitally Validate a Degree"),(0,n.kt)("p",null,"In this tutorial, you will use the ",(0,n.kt)("a",{parentName:"p",href:"../libraries/wasm/getting_started"},"WASM binding of the IOTA Identity framework")," to digitally prove the existence and validity of a degree."),(0,n.kt)("p",null,"To follow along, please clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/adrian-grassl/iota-identity-tutorial/"},"the tutorials repository")," and install the npm/yarn package ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/identity-wasm"},"@iota/identity-wasm",(0,n.kt)("strong",{parentName:"a"},"@dev")),", as described in the ",(0,n.kt)("a",{parentName:"p",href:"../libraries/wasm/getting_started#install-the-library"},"WASM binding documentation"),"."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Problem Description")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Alice recently graduated from the University of Oslo with a Bachelor of Computer Science. Now, she wants to apply for a remote job at the IOTA Foundation and needs to digitally prove the existence and validity of her degree. What she needs is an immutable and verifiable credential, approved by both the University of Oslo and herself, before presenting it to her potential employer."))),(0,n.kt)("h2",{id:"roles"},"Roles"),(0,n.kt)("p",null,"As described in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/digital-identity"},"Digital Identities Solution"),", IOTA Identity builds on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"W3C's proposed standards for a digital identity framework")," based on three roles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Holder"),": Alice"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Issuer"),": University of Oslo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verifier"),": IOTA Foundation")),(0,n.kt)("h2",{id:"terms"},"Terms"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Term"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"Decentralized Identifier (DID)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A globally unique persistent identifier that does not require a centralized registration authority and is often generated and/or registered cryptographically.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-did-subjects"},"DID Subject")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The entity identified by a DID and described by a DID document. Anything can be a DID subject: person, group, organization, physical thing, digital thing, logical thing, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-did-documents"},"DID Document")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A set of data describing the DID subject, including mechanisms, such as cryptographic public keys, that the DID subject or a DID delegate can use to authenticate itself and prove its association with the DID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-verification-method"},"Verification Method")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A set of parameters that can be used together with a process to independently verify a proof. For example, a cryptographic public key can be used as a verification method for a digital signature; in such usage, it verifies that the signer possessed the associated cryptographic private key.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-verifiable-credentials"},"Verifiable Credential")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A standard data model and representation format for cryptographically-verifiable digital credentials. It is signed by the issuer, to prove control over the Verifiable Credential with a nonce or timestamp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Verifiable Presentation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A Verifiable Presentation is the format in which a (collection of) Verifiable Credential(s) gets shared. It is signed by the subject, to prove control over the Verifiable Credential with a nonce or timestamp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-did-resolution"},"DID Resolution")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The process that takes as its input a DID and a set of resolution options and returns a DID document in a conforming representation plus additional metadata.")))),(0,n.kt)("h2",{id:"flow-chart"},"Flow-Chart"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:i(32643).Z},(0,n.kt)("img",{alt:"banner",src:i(58470).Z,width:"862",height:"575"}))),(0,n.kt)("h2",{id:"key-storage"},"Key Storage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In this tutorial, you will store the key pairs for every newly created or updated DID document in Weakhold."),(0,n.kt)("li",{parentName:"ul"},"Ok, ok, it\u2019s just a couple of JSON files in a folder, but it gets the job done."),(0,n.kt)("li",{parentName:"ul"},"The files are stored in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/tree/master/weakhold"},"Weakhold Folder")," (e.g. ./weakhold/Alice.json).")),(0,n.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"This is no proper key storage solution.")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"For professional IOTA implementations we strongly recommend using our key management framework ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs"},"Stronghold"),"."))),(0,n.kt)("h3",{id:"example-weakhold-file"},"Example Weakhold file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject": "Alice",\n    "did": "did:iota:Bakoe4HD4uwekMuyMkeo7mCsA2frXej68M4QyFvEpo2G",\n    "messageId": "7c25309fe97f2cf2d609cf83f31e8838795dd16d235c7a56566970309a0d6dbd",\n    "explorerUrl": "https://explorer.iota.org/mainnet/message/7c25309fe97f2cf2d609cf83f31e8838795dd16d235c7a56566970309a0d6dbd",\n    "authKey": {\n        "type": "ed25519",\n        "public": "ExwZKmF9y2N4mKnEaeUU7bFyCkZ5oVjjK3ojooJKNxUK",\n        "secret": "G83815cmpPadAzs52GmpwS614xpaAWWQxUexmRVNkg75"\n    },\n    "verifKey": {\n        "type": "ed25519",\n        "public": "F9aM5Q9gGXb6Dswe8eSdsz5eDQX2ErTnpGDjFj5LMVvx",\n        "secret": "12S3U2u8ofyju53tmGsG9PKQfkBM8rhzL9BUBhfGqpdm"\n    }\n}\n\n')),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("p",null,"In this process, you will complete the different steps from the perspective of one of the mentioned roles above:"),(0,n.kt)("h3",{id:"1-holder-create-a-did"},"1. ",(0,n.kt)("strong",{parentName:"h3"},"Holder"),": Create a DID."),(0,n.kt)("p",null,"The first thing you will need to do in this tutorial is to create a DID(Decentralized Identifier) Document for Alice."),(0,n.kt)("p",null,"After this step, you will find Alice's weakhold file in ",(0,n.kt)("inlineCode",{parentName:"p"},"./weakhold/Alice.json"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/createDid.js"},"createDid.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"}," createDid('Alice');\n")),(0,n.kt)("h3",{id:"2-issuer-create-a-did"},"2. ",(0,n.kt)("strong",{parentName:"h3"},"Issuer"),": Create a DID"),(0,n.kt)("p",null,"Once you have created the Alice's DID(Decentralized Identifier), you should do the same for the University of Oslo."),(0,n.kt)("p",null,"After this step, you will find the University of Oslo's weakhold file in ",(0,n.kt)("inlineCode",{parentName:"p"},"./weakhold/UniversityofOslo.json"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/createDid.js"},"createDid.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"}," createDid('University of Oslo');\n")),(0,n.kt)("h3",{id:"3-issuer-add-a-verification-method"},"3. ",(0,n.kt)("strong",{parentName:"h3"},"Issuer"),": Add a Verification Method"),(0,n.kt)("p",null,"Since the university will need to verify Alice's degree, you should add a \"degreeVerifications\" verification method to the University's DID document."),(0,n.kt)("p",null,"The University will have to sign more than just Alice's degree, so you should generate this verification method with a set of Merkle keys. These signatures can all be proved by a single public key, while retaining the ability to revoke them separately."),(0,n.kt)("p",null,"Note that the newly added verification method is of the ",(0,n.kt)("em",{parentName:"p"},"type")," ",(0,n.kt)("inlineCode",{parentName:"p"},"MerkleKeyCollection"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/addVerificationMethod.js"},"addVerificationMethod.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"}," //Add verification method with collection of merkle keys to issuer DID\n //This enables the issuer to sign and revoke multiple documents without having to remove the verification method for each revocation\n let issuer = getWeakholdObject('./weakhold/UniversityofOslo.json')\n let issuerVerificationMethod = \"degreeVerifications\";\n\n addVerificationMethod(\n     subjectName = issuer.subject,\n     did = issuer.did,\n     authKey = KeyPair.fromJSON(issuer.authKey),\n     verificationMethodName = issuerVerificationMethod,\n     merkleKeys = true);\n")),(0,n.kt)("h3",{id:"4-holder-add-a-verification-method"},"4. ",(0,n.kt)("strong",{parentName:"h3"},"Holder"),": Add a Verification Method"),(0,n.kt)("p",null,"Alice will need a verification method to present her degree to a third party, so you should add a verification method to her DID document."),(0,n.kt)("p",null,"Since Alice only needs one key pair to her credential's verifiable presentation, she will generate this verification method with a simple private/public key pair."),(0,n.kt)("p",null,"Note that the newly added verification method is of the ",(0,n.kt)("em",{parentName:"p"},"type"),' "Ed25519VerificationKey".'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/addVerificationMethod.js"},"addVerificationMethod.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"}," //Add verification method to holder DID\n let holder = getWeakholdObject('./weakhold/Alice.json')\n let holderVerificationMethod = \"aliceDegreePresentation\";\n\n addVerificationMethod(\n     subjectName = holder.subject,\n     did = holder.did,\n     authKey = KeyPair.fromJSON(holder.authKey),\n     verificationMethodName = holderVerificationMethod,\n     merkleKeys = false);\n")),(0,n.kt)("p",null,"###5. ",(0,n.kt)("strong",{parentName:"p"},"Holder"),": Set Up a Document"),(0,n.kt)("p",null,"You should set up a document representing Alice's degree, containing her DID which will later be signed by the ",(0,n.kt)("strong",{parentName:"p"},"issuer"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/createVerifiableCredential.js"},"createVerifiableCredential.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},' //This part is already hard coded in "createVerifiableCredential.js"\n //Create credential indicating the degree earned by Alice\n const credentialSubject = {\n     "id": holderDid,\n     "name": holderSubject,\n     "degreeName": "Bachelor of Computer Science",\n     "degreeType": "BachelorDegree",\n     "GPA": "4.0"\n }\n')),(0,n.kt)("h3",{id:"6-issuer-sign-the-document"},"6. ",(0,n.kt)("strong",{parentName:"h3"},"Issuer"),": Sign the Document"),(0,n.kt)("p",null,"To verify the degree document created in step 5, you should sign the degree document with the first key in the Merkle key collection of the University's verification method."),(0,n.kt)("p",null,"This step will generate a verifiable credential. After this step you will find the verifiable credential for Alice's degree in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/adrian-grassl/iota-identity-tutorial/tree/master/signedCredentials/"},"./signedCredentials/offlineVerifiableCredential.json"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/createVerifiableCredential.js"},"createVerifiableCredential.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"}," //Issue and sign verifiable credential from weakhold object\n let issuer = getWeakholdObject('./weakhold/UniversityofOslo.json')\n let issuerVerificationMethod = \"degreeVerifications\";\n let holder = getWeakholdObject('./weakhold/Alice.json')\n\n createVerifiableCredential(\n     issuer.subject,\n     issuer.did,\n     KeyCollection.fromJSON(issuer.verifKey),\n     issuerVerificationMethod,\n     holder.did,\n     holder.subject);\n")),(0,n.kt)("h3",{id:"7-holder-verify-the-credentials"},"7. ",(0,n.kt)("strong",{parentName:"h3"},"Holder"),": Verify the Credentials"),(0,n.kt)("p",null,"Since Alice wants to be sure that her credentials are properly verified, you should verify the credentials to make sure it was actually signed by a key associated to the University DID."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/checkVerifiableCredential.js"},"checkVerifiableCredential.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"}," let signedVcPath = './signedCredentials/offlineVerifiableCredential.json';\n checkVerifiableCredential(signedVcPath);\n")),(0,n.kt)("h3",{id:"8-holder-sign-a-verifiable-credential"},"8. ",(0,n.kt)("strong",{parentName:"h3"},"Holder"),": Sign a Verifiable Credential"),(0,n.kt)("p",null,"Alice need a verifiable presentation to send to the IOTA Foundation, so you should sign the verifiable credential with a private key of Alice's verification method."),(0,n.kt)("p",null,"This step will generate a verifiable presentation. After this step you will find the verifiable presentation of Alice's degree in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/adrian-grassl/iota-identity-tutorial/tree/master/signedCredentials"},"./signedCredentials/offlineVerifiablePresentation.json"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/createVerifiablePresentation.js"},"createVerifiablePresentation.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"}," //Issue and sign verifiable credential from weakhold object\n let holder = getWeakholdObject('./weakhold/Alice.json')\n let holderVerificationMethod = \"aliceDegreePresentation\";\n let signedVcPath = './signedCredentials/aliceVerifiableCredential.json';\n\n createVerifiablePresentation(\n     holder.subject,\n     holder.did,\n     KeyPair.fromJSON(holder.verifKey),\n     holderVerificationMethod,\n     signedVcPath);\n")),(0,n.kt)("h3",{id:"9-verifier-verify-alices-and-the-universitys-signatures"},"9. ",(0,n.kt)("strong",{parentName:"h3"},"Verifier"),": Verify Alice's and the University's Signatures"),(0,n.kt)("p",null,"The IOTA Foundation need to verify the presentation's signatures, so you should use Alice's and the University's public keys to verify their verifiable presentation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/checkVerifiablePresentation.js"},"checkVerifiablePresentation.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"}," let signedVpPath = './signedCredentials/offlineVerifiablePresentation.json';\n checkVerifiablePresentation(signedVpPath);\n")),(0,n.kt)("h3",{id:"10-issuer-revoke-the-verification-for-alices-credential"},"10. ",(0,n.kt)("strong",{parentName:"h3"},"Issuer"),": Revoke the Verification for Alice's Credential."),(0,n.kt)("p",null,"Unfortunately the University found out, that Alice had cheated on her final exam. Therefore, the University wants to revoke the verification of Alice's credential."),(0,n.kt)("p",null,"Since they used a Merkle key collection as a verification method, you can do this two ways:"),(0,n.kt)("h4",{id:"1-remove-the-whole-verification-method"},"1. Remove the whole verification method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/removeVerificationMethod.js"},"removeVerificationMethod.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"//Remove whole verification method and thus also the used key pair for signatures\nlet issuer = getWeakholdObject('./weakhold/UniversityofOslo.json');\nlet verificationMethodName  = \"degreeVerifications\";\n\nremoveVerificationMethod(\n    issuer.subject,\n    issuer.did,\n    KeyPair.fromJSON(issuer.authKey),\n    verificationMethodName );\n")),(0,n.kt)("h4",{id:"2-only-revoke-the-one-merkle-key-used-for-the-signature"},"2. Only revoke the one Merkle key used for the signature."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/removeMerkleKey.js"},"removeMerkleKey.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"//Revoke signatures, which used the first key in the Merkle key collection\nlet issuer = getWeakholdObject('./weakhold/UniversityofOslo.json');\nlet verificationMethodName  = \"degreeVerifications\";\n\nremoveMerkleKey(\n    issuer.subject,\n    issuer.did,\n    KeyPair.fromJSON(issuer.authKey),\n    verificationMethodName,\n    KeyCollection.fromJSON(issuer.verifKey));\n")),(0,n.kt)("p",null,"Note that you could also revoke Alice's signature on the verifiable presentation, by removing her verification method."),(0,n.kt)("h3",{id:"11-verifier-verify-signatures-again"},"11. ",(0,n.kt)("strong",{parentName:"h3"},"Verifier"),": Verify Signatures Again"),(0,n.kt)("p",null,"The IOTA Foundation verifies Alice's and the University's signatures again by checking the verifiable presentation and finds out that the University revoked their signature."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrian-grassl/iota-identity-tutorial/blob/master/checkVerifiablePresentation.js"},"checkVerifiablePresentation.js"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"let signedVpPath = './signedCredentials/signedVP.json';\ncheckVerifiablePresentation(signedVpPath);\n")))}p.isMDXComponent=!0},32643:function(e,t,i){t.Z=i.p+"assets/files/identity_tutorial_chart-8b7e2c12126380613cd8b0509496ccad.png"},58470:function(e,t,i){t.Z=i.p+"assets/images/identity_tutorial_chart-8b7e2c12126380613cd8b0509496ccad.png"},3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return p}});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(i),p=r,f=u["".concat(s,".").concat(p)]||u[p]||h[p]||n;return i?a.createElement(f,o(o({ref:t},c),{},{components:i})):a.createElement(f,o({ref:t},c))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<n;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);