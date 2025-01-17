-- # Export (because why not?)
exports("sendNotify", function(msg, typ, time)
    sendMessageToNUI(msg, typ, time)
end)

-- # Event
RegisterNetEvent("cb-notify:client:sendNotify", function(msg, typ, time)
    sendMessageToNUI(msg, typ, time)
end)

-- # Function
function sendMessageToNUI(msg, type, time)
    SendNUIMessage({
        message = msg,
        status = type or "success",
		time = time or Config.defaultTime,
		notifyType = Config.notifyType,
    })
end

RegisterCommand("notifymenu", function()
    SendNUIMessage({
        action = "openUI",
        state = true,
    })
    SetNuiFocus(true, true)
end)

RegisterNUICallback("notifyType", function(data, cb)
    Config.notifyType = data.type
    cb("ok")
end)

RegisterNUICallback("closeUI", function(data, cb)
    SendNUIMessage({
        action = "openUI",
        state = false,
    })
    SetNuiFocus(false, false)
    cb("ok")
end)