
export default function resolveHost(){
    var hostUnparsed = jQuery(location).attr("href");
    var indexOfHostDelimiter = hostUnparsed.indexOf("/wp-admin");
    var hostParsed = hostUnparsed.substr(0,indexOfHostDelimiter);

    return hostParsed;
}
