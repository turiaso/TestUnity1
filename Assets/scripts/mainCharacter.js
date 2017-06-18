#pragma strict

private var status: int = 0;

var speed: float = 1.0;

function Start () {
	
}

function Update () {

    switch(status){
        case 1:
            transform.Translate(0,0,speed * Time.deltaTime);
            break;
        case -1:
            transform.Translate(0,0,-speed * Time.deltaTime);
            break;
    }
	
}

function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey) {
        Debug.Log("Current event detected: " + e.type + "Detected key code: " + e.keyCode);
    }

    switch(e.type){
        case EventType.KeyDown:
            switch(e.keyCode){
                case  KeyCode.UpArrow:
                    status = 1;
                    break;
                case  KeyCode.DownArrow:
                    status = -1;
                    break;
            }
            break;
        case EventType.KeyUp:
            status = 0;
            break;
    }
}
