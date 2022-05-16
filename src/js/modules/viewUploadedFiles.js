const container = document.querySelector('.photo__uploaded');

export default function viewUploadedFiles(filesUploaded){
    container.innerHTML = '';

    filesUploaded.map((file,index)=>{
        var fileImage = file.customType == "pdf" ? '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g fill="none" fill-rule="nonzero"><path fill="#DA3737" d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/><path fill="#FFF" d="M8.313 8c-.2.645-.487 1.334-.878 2.093-.174.331-.365.645-.435.907l.096-.035a16.367 16.367 0 0 1 2.904-.81 2.98 2.98 0 0 1-.357-.28C9.122 9.43 8.67 8.785 8.313 8zm6.408 3.661c-.165.184-.455.29-.881.29-.736 0-1.936-.222-2.904-.716-1.664.184-2.903.407-3.9.726-.048.02-.106.039-.174.068C5.662 14.081 4.772 15 3.988 15a.868.868 0 0 1-.426-.106l-.465-.3-.029-.049a.879.879 0 0 1-.048-.522c.106-.513.658-1.326 1.82-2.052.183-.136.473-.29.86-.474.29-.503.6-1.094.93-1.742.493-.997.803-1.984 1.045-2.836v-.01c-.358-1.17-.571-1.877-.213-3.164.087-.368.406-.745.765-.745h.232c.222 0 .435.077.59.232.639.639.339 2.197.02 3.484-.02.058-.03.107-.04.136.388 1.093.94 1.974 1.55 2.477.251.194.532.387.841.561.436-.048.852-.067 1.249-.067 1.2 0 1.926.212 2.206.667a.779.779 0 0 1 .117.533.935.935 0 0 1-.271.638zm-.802-.311c-.09-.1-.45-.35-1.712-.35-.063 0-.126 0-.207.1.658.32 1.297.51 1.712.51.063 0 .117-.01.17-.02h.037c.045-.02.072-.03.081-.13-.018-.03-.036-.07-.081-.11zM6 12c-.249.12-.45.23-.568.31-.84.65-1.373 1.31-1.432 1.69.533-.15 1.23-.81 2-2zm2.187-6l.05-.037c.07-.295.1-.553.16-.756l.03-.147c.1-.525.08-.793-.09-1.014L8.187 4c-.02.028-.05.074-.07.11-.17.388-.16 1.06.07 1.89z"/></g></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g fill="none" fill-rule="nonzero"><path fill="#DA3737" d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/><path fill="#DA3737" d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/><path fill="#FFF" d="M12.5 9.5L10 12.51 6.5 8 2 14h14z"/></g></svg>'
        let viewUploadedFileTemplate = `
        <div>
        <span class="photo__fileName">
        ${fileImage}
        </span>
        <span class="photo__fileName">${file.name}</span>
        <span class="photo__fileType">${file.customType}</span>
        <span class="photo__fileSize">${file.size}</span>
        <span class="photo__fileStatus">uploaded</span>
        <svg onclick="deleteFile(${index})" class="photo__fileDelete" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
            <defs>
                <path id="a" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/>
            </defs>
            <g fill="none" fill-rule="evenodd">
                <mask id="b" fill="#fff">
                    <use xlink:href="#a"/>
                </mask>
                <g fill="#637381" mask="url(#b)">
                    <path d="M0 0h24v24H0z"/>
                </g>
            </g>
        </svg>
        </div>
        `;
        container.innerHTML+=viewUploadedFileTemplate;
    });
};