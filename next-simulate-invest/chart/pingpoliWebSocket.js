/*
Copyright 2022 Christian Behler
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var _private_socket;

function pingpoliWebSocket(host , customOnOpen , customOnMessage , customOnClose )
{
    this.host = host;
    this.socketConnected = false;
    this.status = "connecting";
    // onopen function
    if ( customOnOpen ) this.onOpenCallback = customOnOpen;
    else this.onOpenCallback = function( msg ) { console.log( "pingpoliWebSocket > default onopen" ); };
    // onmessage function
    if ( customOnMessage ) this.onMessageCallback = customOnMessage;
    else this.onMessageCallback = function( msg ) { console.log( "pingpoliWebSocket > default onmessage: "+msg.data ); };
    // onclose function
    if ( customOnClose ) this.onCloseCallback = customOnClose;
    else this.onCloseCallback = function( event ) { console.log( "pingpoliWebSocket > disconnected - event.code: "+event.code+", reason: "+event.reason ); };
    // start the websocket
    try
    {
        _private_socket = new WebSocket( host );
        // set a custom on open callback
        _private_socket.onOpenCallback = this.onOpenCallback;
        _private_socket.onopen = function( msg )
        { 
            console.log( "pingpoliWebSocket > welcome - status: "+this.readyState );
            this.socketConnected = true;
            this.status = "connected";
            // call the onopen callback
            _private_socket.onOpenCallback();
        };
        // set an onmessage callback
        _private_socket.onmessage = this.onMessageCallback;
        // set an onclose callback
        _private_socket.onCloseCallback = this.onCloseCallback;
        _private_socket.onclose = function( event )
        {
            console.log( "pingpoliWebSocket > closed" );
            this.socketConnected = false;
            this.status = "closed";
            // call the onclose callback
            _private_socket.onCloseCallback();
        }
        // set an onerror function
        _private_socket.onerror = function( event )
        {
            console.log( "pingpoliWebSocket > error" );
            this.socketConnected = false;
            this.status = "error";
        };
    }
    catch ( ex )
    {
        console.log( "pingpoliWebSocket > exception: "+ex );
        this.status = "error";
    }
}

pingpoliWebSocket.prototype.reconnect = function()
{
    try
    {
        _private_socket = new WebSocket( this.host );
        console.log( "pingpoliWebSocket > status: "+_private_socket.readyState );
        // set a custom on open callback
        _private_socket.onOpenCallback = this.onOpenCallback;
        _private_socket.onopen = function( msg )
        { 
            console.log( "pingpoliWebSocket > welcome - status: "+this.readyState );
            this.socketConnected = true;
            this.status = "connected";
            // call the onopen callback
            _private_socket.onOpenCallback();
        };
        // set an onmessage callback
        _private_socket.onmessage = this.onMessageCallback;
        // set an onclose callback
        _private_socket.onCloseCallback = this.onCloseCallback;
        _private_socket.onclose = function( event )
        {
            console.log( "pingpoliWebSocket > closed" );
            this.socketConnected = false;
            this.status = "closed";
            // call the onclose callback
            _private_socket.onCloseCallback();
        }
        // set an onerror function
        _private_socket.onerror = function( event )
        {
            console.log( "pingpoliWebSocket > error" );
            this.socketConnected = false;
            this.status = "error";
        };
    }
    catch ( ex )
    {
        console.log( "pingpoliWebSocket > exception: "+ex );
        this.socketConnected = false;
    }
}

pingpoliWebSocket.prototype.close = function()
{
    _private_socket.close();
}

pingpoliWebSocket.prototype.send = function( str )
{
    try
    {
        _private_socket.send( str );
    }
    catch ( ex )
    {
        console.log( "pingpoliWebSocket > send > exception: "+ex );
    }
}

pingpoliWebSocket.prototype.isConnected = function()
{
    return this.socketConnected;
}

pingpoliWebSocket.prototype.getStatus = function()
{
    return this.status;
}

pingpoliWebSocket.prototype.getSocket = function()
{
    return _private_socket;
}

pingpoliWebSocket.prototype.setOnErrorCallback = function( onErrorCallback )
{
    // set an onerror function
    _private_socket.onErrorCallback = onErrorCallback;
    _private_socket.onerror = function( event )
    {
        this.socketConnected = false;
        this.status = "error";
        _private_socket.onErrorCallback( event );
    };
}